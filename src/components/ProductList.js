import React from "react";

const ProductList = ({ products, onEdit, onDelete }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="px-4 py-2">Photo</th>
          <th className="px-4 py-2">Nama Barang</th>
          <th className="px-4 py-2">Harga Beli</th>
          <th className="px-4 py-2">Harga Jual</th>
          <th className="px-4 py-2">Stok</th>
          <th className="px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="px-4 py-2">
              <img src={URL.createObjectURL(product.photo)} alt={product.namaBarang} className="w-16 h-16" />
            </td>
            <td className="px-4 py-2">{product.namaBarang}</td>
            <td className="px-4 py-2">{product.hargaBeli}</td>
            <td className="px-4 py-2">{product.hargaJual}</td>
            <td className="px-4 py-2">{product.stok}</td>
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
