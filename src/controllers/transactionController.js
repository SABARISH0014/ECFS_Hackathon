const Transaction = require('../models/Transaction');
const alertService = require('../services/alertService');


//get transaction by productId

exports.getTransactionsByProduct = async (req, res) => {

    try{
        const { productId } = req.params;

        const transactions = await Transaction.find({ productID: productId });

        res.status(200).json(transactions);
        
    }catch(error){
        res.status(500).json({ message: error.message});
    }
};

//create transaction using await

exports.createTransaction = async (req, res) => {

    try{
        const { productID, type, quantity } = req.body;

        const transaction = await Transaction.create({
            productID,
            type,
            quantity,
        });

        res.status(201).json(transaction);
    }catch(error){
        console.error("Transaction Error:", error.message);
        res.status(500).json({ message: error.message });
    }
};

//get lowStock Alert

exports.getLowStockAlert = async (req, res) => {

    try{
        const lowStockProducts = await alertService.getLowStockAlerts();

        res.status(200).json(lowStockProducts);

    }catch(error){

        res.status(500).json({ message: error.message });
    }
};