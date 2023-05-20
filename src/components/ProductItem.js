import React from "react";

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <div className="p-4 border mb-4">
      <img src={URL.createObjectURL(product.photo)} alt={product.namaBarang} className="w-24 h-24 mb-2" />
      <h3 className="text-lg font-bold mb-2">{product.namaBarang}</h3>
      <p>Harga Beli: {product.hargaBeli}</p>
      <p>Harga Jual: {product.hargaJual}</p>
      <p>Stok: {product.stok}</p>
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
