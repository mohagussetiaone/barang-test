import React from "react";

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <div className="p-4 border mb-4">
      <img src={URL.createObjectURL(product.photo)} alt={product.name} className="w-24 h-24 mb-2" />
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p>Purchase Price: {product.purchasePrice}</p>
      <p>Selling Price: {product.sellingPrice}</p>
      <p>Stock: {product.stock}</p>
      <button onClick={() => onEdit(product)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-2">
        Edit
      </button>
      <button onClick={() => onDelete(product)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">
        Delete
      </button>
    </div>
  );
};

export default ProductItem;
