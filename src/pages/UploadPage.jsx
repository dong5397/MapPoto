import React, { useState, useEffect } from "react";
import axios from "axios";

function UploadPage() {
  const [file, setFile] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/photos")
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("photo", file);

    axios
      .post("http://localhost:5000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
        setPhotos([...photos, ...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fileSelectedHandler = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={fileSelectedHandler} />
      <button onClick={fileUploadHandler}>Upload</button>
    </div>
  );
}

export default UploadPage;
