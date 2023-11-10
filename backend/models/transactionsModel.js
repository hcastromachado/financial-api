const config = require("../config/config");
const mssql = require("mssql");
const { customAlphabet } = require("nanoid");
const nanoid = customAlphabet("1234567890", 9);
//const transactionDate = require("../utils/formatDate")

const sql = new mssql.ConnectionPool(config);

const getAllTransactions = async () => {
  const connection = await sql.connect();
  const getAllTransactions = await connection
    .request()
    .query("SELECT * FROM Transactions");

  return getAllTransactions;
};


const getAllAccounts = async () => {
  const connection = await sql.connect();
  const getAllTransactions = await connection
    .request()
    .query("SELECT * FROM Accounts");

  return getAllTransactions;
};

const createNewAccount = async (account) => {
  const { accountId } = account;

  await sql.connect();
  try {
    const checkIfAccountExists = await sql
      .request()
      .input("AccountId", accountId)
      .query(`SELECT AccountId FROM Accounts WHERE AccountID = @AccountId`);

    const account = checkIfAccountExists.recordset[0].AccountId;

    if (account == nanoid()) {
      console.log("Account already exists in the database!");
    } else {
      const createNewAccount = await sql
        .request()
        .input("AccountID", nanoid())
        .input("CustomerID", "3")
        .input("AccountType", "Savings")
        .input("Balance", 0)
        .input("Status", "Active")
        .input("CreatedAt", "2023-11-02 11:42:00.000")
        .query(`INSERT INTO Accounts (AccountID, CustomerID, AccountType, Balance, Status, CreatedAt)
        OUTPUT inserted.AccountId
        VALUES (CONVERT(nvarchar(10), @AccountId), CONVERT(nvarchar(10), @CustomerId), @AccountType, @Balance, @Status, @CreatedAt)`);

      return createNewAccount;
    }
  } catch (err) {
    console.error(err);
  }
};

const createNewDeposit = async (account) => {
  const { accountId, amount } = account;

  try {
    await sql.connect();
    const createNewDeposit = await sql
      .request()
      .input("TransactionId", nanoid())
      .input("AccountId", accountId)
      .input("TransactionType", "Deposit")
      .input("Amount", amount)
      .input("TransactionDate", "2023-11-02 16:07:00.000")
      .query(`INSERT INTO Transactions (TransactionID, AccountID, TransactionType, Amount, TransactionDate)
    OUTPUT inserted.TransactionID
    VALUES(@TransactionID, @AccountID, @TransactionType, @Amount, @TransactionDate)`);
  } catch (error) {
    console.error("Error message: ", error);
  }

  return createNewDeposit;
};

const createNewWithdrawal = async (account, value) => {
  const { accountId } = account;
  const { amount } = value;

  try {
    await sql.connect();

    const checkAccountBalance = await sql
      .request()
      .input("AccountId", accountId)
      .query(
        `SELECT Balance FROM dbo.GetCustomerBalance WHERE AccountID = @AccountId`
      );

    const balance = checkAccountBalance.recordset[0].Balance;

    if (balance < amount) {
      return console.log("Error: Insuficient Balance!");
    } else {
      const createNewWithdrawal = await sql
        .request()
        .input("TransactionId", nanoid())
        .input("AccountId", accountId)
        .input("TransactionType", "Withdrawal")
        .input("Amount", amount)
        .input("TransactionDate", "2023-11-02 16:07:00.000")
        .query(`INSERT INTO Transactions (TransactionID, AccountID, TransactionType, Amount, TransactionDate)
        OUTPUT inserted.TransactionID
        VALUES(@TransactionID, @AccountID, @TransactionType, @Amount, @TransactionDate)`);
      return createNewWithdrawal;
    }
  } catch (error) {
    console.error("Error message: ", error);
  }
};

module.exports = {
  getAllTransactions,
  getAllAccounts,
  createNewAccount,
  createNewDeposit,
  createNewWithdrawal,
};
