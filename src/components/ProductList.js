import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Photo</th>
          <th className="px-4 py-2">Name</th>
          <th className="px-4 py-2">Purchase Price</th>
          <th className="px-4 py-2">Selling Price</th>
          <th className="px-4 py-2">Stock</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="px-4 py-2">
              <img src={URL.createObjectURL(product.photo)} alt={product.name} className="w-16 h-16" />
            </td>
            <td className="px-4 py-2">{product.name}</td>
            <td className="px-4 py-2">{product.purchasePrice}</td>
            <td className="px-4 py-2">{product.sellingPrice}</td>
            <td className="px-4 py-2">{product.stock}</td>
            <td className="px-4 py-2">
              <button onClick={() => onEdit(product)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
                Edit
              </button>
              <button onClick={() => onDelete(product)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4">
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
