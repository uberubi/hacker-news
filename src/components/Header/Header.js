import React from "react";
import { Link } from "react-router-dom";
import { Header as HeaderBar } from "semantic-ui-react";

const Header = () => {
  return (
    <HeaderBar as="h2" block color="red" >
      <Link to="/">Hacker News</Link>
    </HeaderBar>
  );
};

export default Header;
