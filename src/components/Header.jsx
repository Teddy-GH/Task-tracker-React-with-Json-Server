import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = ({ title, onAdd, showAdd }) => {
  const history = useNavigate();

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task tracker",
};

export default Header;
