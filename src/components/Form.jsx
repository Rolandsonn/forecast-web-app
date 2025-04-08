import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
const Form = ({ handleForm }) => {
  const [form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleForm(form);
    setForm("");
  };

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  return (
    <form className="header__form" onSubmit={handleSubmit}>
      <button>
        <IoIosSearch
          style={{
            position: "absolute",
            top: "12px",
            left: "20px",
          }}
          size="40px"
          color="#000"
        />
      </button>
      <input
        placeholder="Search for your preffered city..."
        type="text"
        value={form}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
