import { NextResponse } from "next/server";
import { connectDB } from "../../lib/mongoose";
import Product from "../../models/Product";

export async function getAllProducts() {
  await connectDB()
  const products = await Product.find().exec()
  return products
}

export async function GET(req) { 
  return NextResponse.json({
    products: await getAllProducts()
  })
}