import { RequestHandler } from 'express';
import Product from '../models/product.model';

export const createProduct: RequestHandler = async (req,res)=>{
    try {
        const product = new Product(req.body);
  
        const productSave = await product.save();
        
        res.json(productSave);
    } catch (error) {
        return res.status(500).json({
            message: 'Ocurrio un error',
            error
        });
    }
};

export const getProducts: RequestHandler = (req,res)=>{
    res.json("getting products");
};

export const updateProduct: RequestHandler = (req,res)=>{
    res.json("update product");
};