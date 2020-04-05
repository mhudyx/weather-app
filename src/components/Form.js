import React from "react";

const Form = props => {
  const {value, change, submit} = props;
  return (
    <form className="search" onSubmit={submit}>
      <input 
      className="search__input"
      type="text"
      value={value}
      onChange={change}
      placeholder="city"
      />
      <button className="search__btn">Search</button>
    </form>
  );
};

export default Form;
