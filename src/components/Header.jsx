import React from "react";
import Form from "./Form";

const Header = ({ mode, handleClick, handleForm }) => {
  const classMove = mode ? "header__right header__circle" : "header__circle";
  const textMode = mode ? "dark" : "light";

  return (
    <header className="header">
      <div className="header__mode">
        <button onClick={handleClick} className="header__btn">
          <span className={classMove}></span>
        </button>
        <p>{textMode} mode</p>
      </div>
      <Form handleForm={handleForm} />
    </header>
  );
};

export default Header;
