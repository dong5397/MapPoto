import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import mapImage from "../components/images/mapimg.png";

const imageAppear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const textAppear = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const buttonGlow = keyframes`
  0% {
    box-shadow: 0 0 5px #333;
  }
  50% {
    box-shadow: 0 0 20px #333, 0 0 30px #333;
  }
  100% {
    box-shadow: 0 0 5px #333;
  }
`;

const Home = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/MapPoto");
  };

  return (
    <HeroContainer>
      <HeroContent>
        <HeroButton onClick={handleButtonClick}>상세 페이지로 이동</HeroButton>
      </HeroContent>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${mapImage});
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  animation: ${imageAppear} 3s ease-in-out forwards; // 배경 이미지에 효과를 추가합니다.
`;

const HeroContent = styled.div`
  text-align: center;
  animation: ${textAppear} 5s ease-in-out forwards;
`;

const HeroButton = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1.1rem;
  color: white;
  background-color: #333;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  animation: ${buttonGlow} 2s infinite;

  &:hover {
    background-color: #777;
  }
`;

export default Home;
