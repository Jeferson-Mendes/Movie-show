import React from "react";

import { FiSearch } from 'react-icons/fi'
import "./style.css";

const Nav = (props) => {
  
  return (
    <div>
      <nav className="menu">
        <div className="title">Movie Show</div>

        <label htmlFor="genres"></label>
        <select 
          name="genres"
          id="genres"
          onChange={props.genreChange}
          className="genres-select"
          value={"0"}
            >
            <option value="0">Genres</option>
            {props.genre.map(genre => (

              <option key={genre.id} value={[genre.id, genre.name]}>{genre.name}</option>

            ))}
        </select>
        
      </nav>
    </div>
  );
};

export default Nav;
