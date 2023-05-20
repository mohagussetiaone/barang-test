import React, { useState } from "react";

const ProductForm = ({ onSubmit }) => {
  const [barang, setBarang] = useState("");
  const [formData, setFormData] = useState({
    photo: null,
    namaBarang: "",
    hargaBeli: "",
    hargaJual: "",
    stok: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const MAX_FILE_SIZE = 100; // KB

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "namabarang") {
      setBarang(value);
    }
    var storedValues = localStorage.getItem("products");
    if (storedValues) {
      // Jika ada nilai yang tersimpan dalam local storage
      storedValues = JSON.parse(storedValues);
      // Memeriksa apakah nilai unik
      if (storedValues.includes(barang)) {
        // Jika nilai sudah ada dalam local storage
        window.alert("Nilai harus unik!");
      } else {
        console.log("nama barang", barang);
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      }
    }
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileSizeKB = file.size / 1024;
      if (fileSizeKB > MAX_FILE_SIZE) {
        setFormErrors({
          ...formErrors,
          photo: `Ukuran File Melebihi batas maksimum ${MAX_FILE_SIZE}KB`,
        });
      } else if (!file.type.includes("image/jpeg") && !file.type.includes("image/png")) {
        setFormErrors({
          ...formErrors,
          photo: "Hanya file JPG atau PNG yang diizinkan",
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
      <h2 className="text-lg font-bold mb-4">Barang</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-bold">Photo:</label>
          <input type="file" name="photo" onChange={handlePhotoChange} accept="image/jpeg,image/png" />
          {formErrors.photo && <p className="text-red-500">{formErrors.photo}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold">Nama Barang:</label>
          <input type="text" name="namaBarang" id="namabarang" value={formData.namaBarang} onChange={handleInputChange} className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold">Harga Beli:</label>
          <input type="text" name="hargaBeli" value={formData.hargaBeli} onChange={handleInputChange} className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold">Harga Jual:</label>
          <input type="text" name="hargaJual" value={formData.hargaJual} onChange={handleInputChange} className="w-full" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold">Stok:</label>
          <input type="text" name="stok" value={formData.stok} onChange={handleInputChange} className="w-full" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2">
          Add
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
