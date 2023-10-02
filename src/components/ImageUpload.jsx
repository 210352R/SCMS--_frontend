import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ImageUpload() {
  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    //setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", file);

    console.log("Form Data : ", formData);
    //formData.append("fileName", fileName);
    try {
      const res = await axios.put(
        `http://localhost:8000/customer/upload/${"Cust017"}`,
        formData
      );
      console.log(res.data);
      alert("Image Added successfull --- ");
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="container">
      <input type="file" onChange={handleFile} />
      <button onClick={uploadFile}>submit </button>
    </div>
  );
}
