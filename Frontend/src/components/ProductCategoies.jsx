import React from "react";
import { useAppContext } from "../context/AppContext";
import { useParams } from "react-router-dom";
import { categories } from "../assets/assets";
import ProductCrad from "./ProductCard";

const ProductCategoies = () => {
  const { products } = useAppContext();
  const { category } = useParams();

  const searchCategory = categories.find(
    (item) => item.path.toLowerCase() === category
  );
  const filteredProducts = products.filter((product) => product.category
    .toLowerCase() === category)
  
  return(
  <div className=" mt-16">
    {searchCategory && (
      <div className="flex flex-col items-end w-max">
          <p className="text-2xl font-medium ">
        {searchCategory.text.toUpperCase()}
          </p>
          <div className="w-16 h-0.5 bg-primary rounded-full  "></div>

          
      </div>
      )}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-6 gap-3 mt-6 mb-16 ">
          {filteredProducts.map((product) => (
            <ProductCrad key={product._id} product={product} />
          ))}
        </div>
        
      ): (
          <div className="flex  items-center justify-center h-[60vh]">
              <p className="text-2xl font-medium text-primary">No Product found in this Category</p>
          </div>
      )}
    </div>
  );
};

export default ProductCategoies;
