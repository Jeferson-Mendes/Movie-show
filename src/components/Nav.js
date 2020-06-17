import React from "react";

import { FiSearch } from 'react-icons/fi'
import "./navStyle.css";

const Nav = () => {
  return (
    <div>
      <nav className="menu">
        <div className="title">Movie Show</div>
        <form>
          <input type="text" placeholder="Search here" />
          <button>
            <FiSearch/>
          </button>
        </form>
      </nav>
    </div>
  );
};

export default Nav;
