import React, { useState } from "react";
import axios from "axios";

function UploadPage() {
  const [file, setFile] = useState(null);

  const fileUploadHandler = () => {
    const formData = new FormData();
    formData.append("photo", file);

    axios
      .post("/api/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
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
