const express = require('express');
const transactionController = require('../controllers/transactionController');

const router = express.Router();

router.get("/:productId", transactionController.getTransactionsByProduct);
router.post("/", transactionController.createTransaction);
router.get("/alerts/low-stock", transactionController.getLowStockAlert);

module.exports = router;