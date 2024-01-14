import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Image = styled.img`
  margin: 10px;
  width: 200px;
  height: 200px;
`;

function MyPage() {
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

  return (
    <div>
      {photos.map((photo) => (
        <Image
          key={photo.id}
          src={photo.url} // URL이 완전한 형태로 저장되어 있다고 가정
          alt="사진"
        />
      ))}
    </div>
  );
}

export default MyPage;
