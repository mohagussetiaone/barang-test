import React, { useState } from "react";

const ProductForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    photo: null,
    name: "",
    purchasePrice: "",
    sellingPrice: "",
    stock: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const MAX_FILE_SIZE = 100; // KB

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeKB = file.size / 1024;
      if (fileSizeKB > MAX_FILE_SIZE) {
        setFormErrors({
          ...formErrors,
          photo: `File size exceeds the maximum limit of ${MAX_FILE_SIZE}KB`,
        });
      } else if (!file.type.includes("image/jpeg") && !file.type.includes("image/png")) {
        setFormErrors({
          ...formErrors,
          photo: "Only JPG or PNG files are allowed",
        });
      } else {
        setFormErrors({
          ...formErrors,
          photo: "",
        });
        setFormData({
          ...formData,
          photo: file,
        });
      }
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="modal-content">
      <h2 className="text-lg font-bold mb-4">Add Product</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold">Photo:</label>
          <input type="file" name="photo" onChange={handlePhotoChange} accept="image/jpeg,image/png" />
          {formErrors.photo && <p className="text-red-500">{formErrors.photo}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold">Purchase Price:</label>
          <input type="text" name="purchasePrice" value={formData.purchasePrice} onChange={handleInputChange} className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold">Selling Price:</label>
          <input type="text" name="sellingPrice" value={formData.sellingPrice} onChange={handleInputChange} className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold">Stock:</label>
          <input type="text" name="stock" value={formData.stock} onChange={handleInputChange} className="w-full" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
