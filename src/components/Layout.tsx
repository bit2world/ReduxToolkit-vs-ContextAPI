import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface Props {
  children: React.ReactNode
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Nav = styled.div`
  display: flex;
`
const StyledLink = styled(Link)`
  color: Blue;
  text-decoration: none;
  margin: 1rem;
  position: relative;
`;
const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  fontSize: "25px",
  color: 'blue'
};

const Layout = ({ children }: Props) => {
  return (
    <Container >
      <Nav>
        <Link to="/" style={linkStyle}>Context vs Redux Toolkit</Link>
        <Link to="/useState" style={linkStyle}>UseState Testing</Link>
        <Link to="/useCallback" style={linkStyle}>UseCallback Testing</Link>
      </Nav>
      <div>
        {children}
      </div>
    </Container >
  )
}

export default Layout;