const express = require("express");
const router = express.Router();

const transactionsController = require('./controllers/transactionsController');
const transactionsModel = require('./models/transactionsModel');

router.get('/transactions', transactionsController.getAllTransactions);
router.get('/accounts', transactionsController.getAllAccounts)
router.post('/accounts', transactionsController.createNewAccount)
router.post('/deposit', transactionsController.createNewDeposit)
router.post('/withdraw/:accountId', transactionsController.createNewWithdrawal)


module.exports = router;