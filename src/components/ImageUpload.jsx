import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ImageUpload() {
  const [file, setFile] = useState(null);
  const [customer, setCustomer] = useState();
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/login/page") // Use the correct API endpoint
      .then((response) => {
        setHtmlContent(response.data);
      })
      .catch((error) => {
        console.error("Error fetching HTML content:", error);
      });
  }, []);
  // console.log("Customer : ", customer);
  const handleFile = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
    //setFileName(e.target.files[0].name);
  };
  const uploadFile = async (e) => {
    e.preventDefault();

    //formData.append("fileName", fileName);
    try {
      await axios.get("http://localhost:8000/login/page");
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div className="container">
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
