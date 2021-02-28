import { RequestHandler } from 'express';

export const createProduct: RequestHandler = (req,res)=>{
    res.json("create product");
};

export const getProducts: RequestHandler = (req,res)=>{
    res.json("getting products");
};

export const updateProduct: RequestHandler = (req,res)=>{
    res.json("update product");
};