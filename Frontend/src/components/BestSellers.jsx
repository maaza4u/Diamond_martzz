import React from "react";
import ProductCrad from "./ProductCard";
import { useAppContext } from "../context/AppContext";

const BestSellers = () => {
  const { products } = useAppContext();

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid grid-cols-2 md:grid-cols-4  sm:grid-cols-3 gap-3 md:gap-6 lg:grid-cols-5 mt-6">
        {products
          .filter((product) => product.inStock)
          .slice(0, 5)
          .map((product, index) => (
            <ProductCrad key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default BestSellers;
