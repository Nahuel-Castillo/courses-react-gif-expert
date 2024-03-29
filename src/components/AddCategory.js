import React, { useState } from "react";
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target: { value } }) => setInputValue(value);

  const handleSumit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories((cate) => [inputValue, ...cate]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSumit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default AddCategory;
