"use client"

import { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";

async function fetchProducts() {
  const res = await fetch("/api/products");
  const data = await res.json();
  return data.products;
}

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    async function getProducts() {
      setProducts(await fetchProducts());
    }
    getProducts();
  }, []);

  const categories = [...new Set(products.map((product) => product.category))];

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  let filteredProducts = products;
  if (searchTerm) {
    filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  return (
    <main className="p-4 w-full mx-auto relative">
      <input value={searchTerm} onChange={handleChange} type="text" placeholder="Search for products..." className="w-full max-w-[850px] rounded-lg border-2 border-gray-300 p-4 text-center text-xl text-gray-800 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none transition focus:shadow-lg shadow-emerald-500/50 sticky top-0" />
      <div className="flex flex-col justify-center gap-8 w-full">
        {
          categories.map((category) => {
            return (
              <div className="overflow-x-auto" key={category}>
                {filteredProducts.find(product => product.category === category) && 
                  <div>
                    <h2 className="text-3xl font-bold capitalize py-5">{category}</h2>
                    <div className="flex gap-8 w-[850px] snap-x snap-mandatory">
                      {
                        filteredProducts.filter(product => product.category === category).map(product => {
                          return (
                            <ProductCard key={product._id} product={product} />
                          );
                        })
                      }
                    </div>
                  </div>
                }
              </div>
            )
          })
        }
      </div>
    </main>
  );
}