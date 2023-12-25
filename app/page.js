"use client";
import Link from "next/link";
import React, { useState } from "react";

const InputText = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-600">{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="form-input mt-1 p-2 outline-none block w-full border"
      />
    </div>
  );
};

const RestaurantForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    map: "",
    website: "",
    facebook: "",
    instagram: "",
    phone: "",
    email: "",
    location: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", formData);
  };

  return (
    <>
      <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
        <InputText
          label={"Restaurant Name"}
          name={"name"}
          value={formData.name}
          onChange={handleChange}
        />

        <InputText
          label={"Restaurant Map"}
          name={"map"}
          value={formData.map}
          onChange={handleChange}
        />

        <InputText
          label={"Restaurant Website"}
          name={"website"}
          value={formData.website}
          onChange={handleChange}
        />

        <InputText
          label={"Restaurant Phone"}
          name={"phone"}
          value={formData.phone}
          onChange={handleChange}
        />

        <InputText
          label={"Restaurant Email"}
          name={"email"}
          value={formData.email}
          onChange={handleChange}
        />

        <InputText
          label={"Restaurant Facebook"}
          name={"facebook"}
          value={formData.facebook}
          onChange={handleChange}
        />

        <InputText
          label={"Restaurant Instagram"}
          name={"instagram"}
          value={formData.instagram}
          onChange={handleChange}
        />
        <div className="mb-4">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
      <div className="flex items-center justify-center">
        <Link
          href={"/resto-data"}
          className="bg-red-400 p-2 mt-5 rounded text-white "
        >
          Data
        </Link>
      </div>
    </>
  );
};

export default RestaurantForm;
