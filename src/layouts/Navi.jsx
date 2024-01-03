import React, { useState } from "react";
// import CartSummary from "./CartSummary";
import { Container, Menu, MenuItem, MenuMenu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import { NavLink, useNavigate } from "react-router-dom";


export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate("/");
  }
  function handleSignIn() {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <MenuItem as={NavLink} to="/" name="home" />
          <MenuItem name="messages" />

          <MenuMenu position="right">
            <CartSummary />
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </MenuMenu>
        </Container>
      </Menu>
    </div>
  );
}
