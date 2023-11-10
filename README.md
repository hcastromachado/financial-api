# Transactions and Accounts Management API

This README provides an overview of the JavaScript functions and endpoints for managing transactions and accounts in a Node.js application. These functions interact with a data model to handle operations related to financial transactions and accounts.

## Functions and Endpoints

The application includes the following functions and endpoints for managing transactions and accounts:

### `getAllTransactions`

- **Endpoint:** `/transactions`
- **HTTP Method:** GET
- **Description:** This function retrieves all transactions from the data model.
- **Response:** Returns a JSON response containing all transactions.
- **HTTP Status Code:** 200 (OK)

### `getAllAccounts`

- **Endpoint:** `/accounts`
- **HTTP Method:** GET
- **Description:** This function retrieves all accounts from the data model.
- **Response:** Returns a JSON response containing all accounts.
- **HTTP Status Code:** 200 (OK)

### `createNewAccount`

- **Endpoint:** `/accounts`
- **HTTP Method:** POST
- **Description:** This function creates a new account based on the provided request body.
- **Request Body:** Expects a JSON object with account details.
- **Response:** Returns a JSON response containing the newly created account.
- **HTTP Status Code:** 201 (Created)

### `createNewDeposit`

- **Endpoint:** `/deposits`
- **HTTP Method:** POST
- **Description:** This function creates a new deposit transaction based on the provided request body.
- **Request Body:** Expects a JSON object with deposit details.
- **Response:** Returns a JSON response containing the details of the new deposit.
- **HTTP Status Code:** 201 (Created)

### `createNewWithdrawal`

- **Endpoint:** `/withdrawals`
- **HTTP Method:** POST
- **Description:** This function creates a new withdrawal transaction based on the provided request parameters and body.
- **Request Parameters:** Transaction details may be provided through URL parameters.
- **Request Body:** Expects a JSON object with withdrawal details.
- **Response:** Returns a JSON response containing the details of the new withdrawal.
- **HTTP Status Code:** 200 (OK)

## Usage

You can use these functions to manage financial transactions and accounts in your Node.js application. The endpoints allow you to retrieve transaction and account data, create new accounts, and make deposits or withdrawals.

To use these functions, integrate them with your Node.js application and ensure they interact with the appropriate data model or database to store and retrieve transaction and account data.

Please note that this README provides an overview of the functionality, and you should integrate these functions into your application as needed, considering any specific requirements or business logic.

### Requirements 📌

-  It must be possible to create an account  ✅
- It must be possible to fetch the customer's bank statement ✅
- It must be possible to make a deposit ✅
- It must be possible to make a withdrawal ✅
- It must be possible to obtain customer account data ✅
- It must be possible to return the balance ✅
