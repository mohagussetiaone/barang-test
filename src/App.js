import React, { useState, useEffect } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const handleFormSubmit = (formData) => {
    if (selectedProduct) {
      // Update existing product
      const updatedProducts = products.map((product) => {
        if (product.id === selectedProduct.id) {
          return {
            ...product,
            ...formData,
          };
        }
        return product;
      });
      setProducts(updatedProducts);
    } else {
      // Create new product
      const newProduct = {
        id: Date.now(),
        ...formData,
      };
      setProducts([...products, newProduct]);
    }

    setIsOpen(false);
    setSelectedProduct(null);
  };

  const handleEdit = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleDelete = (product) => {
    const updatedProducts = products.filter((p) => p.id !== product.id);
    setProducts(updatedProducts);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <button onClick={() => setIsOpen(true)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-4">
        Add Product
      </button>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="modal bg-white rounded p-4">
            <ProductForm onSubmit={handleFormSubmit} />
            <button onClick={() => setIsOpen(false)} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4">
              Cancel
            </button>
          </div>
        </div>
      )}
      <ProductList products={products} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default App;
