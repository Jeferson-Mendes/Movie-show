import React from "react";

import { FiSearch } from 'react-icons/fi'
import "./style.css";

const Nav = (props) => {
  return (
    <div>
      <nav className="menu">
        <div className="title">Movie Show</div>
        <form onSubmit={props.submit} >
          <input type="text" placeholder="Search here" onChange={props.inputChange} />
          <button type='submit' >
            <FiSearch/>
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Nav;
