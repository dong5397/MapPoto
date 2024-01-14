import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "./images/MainImg.jpg";
function Header() {
  return (
    <Container>
      <Cell className="left">
        <Link to="/">
          <Img src={logo} alt="로고" />
        </Link>
        <Link to="/upload">사진등록</Link>
        <Link to="/mypage">내 일기장</Link>
      </Cell>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 2.5rem;
  padding: 0.5rem 0;
`;

const Cell = styled.div`
  display: flex;
  align-items: center;
  &.left {
    gap: 3rem;
    font-size: 1.3rem;
    cursor: pointer;
  }
`;
const Img = styled.img`
  width: 80px;
  cursor: pointer;
  display: block;
`;
