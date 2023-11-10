const transactionsModel = require("../models/transactionsModel");

const getAllTransactions = async (request, response) => {
  const transactions = await transactionsModel.getAllTransactions();
  return response.status(200).json(transactions);
};

const getAllAccounts = async (request, response) => {
  const transactions = await transactionsModel.getAllAccounts();
  return response.status(200).json(transactions);
};

const createNewAccount = async (request, response) => {
  const transactions = await transactionsModel.createNewAccount(request.body);
  return response.status(201).json(transactions);
};

const createNewDeposit = async (request, response) => {

    const transactions = await transactionsModel.createNewDeposit(request.body);
    return response.status(201).json(transactions);

};

const createNewWithdrawal = async (request, response) => {

  const transactions = await transactionsModel.createNewWithdrawal(request.params, request.body);
  return response.json(transactions);

};

module.exports = {
  getAllTransactions,
  getAllAccounts,
  createNewAccount,
  createNewDeposit,
  createNewWithdrawal
};
