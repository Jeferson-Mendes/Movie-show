import React from 'react';

import { FiSearch } from 'react-icons/fi';

import './style.css'

const Welcome = (props) => {

    return (
        <div className="wellcome-container">
            <h1 className="wellcome-title">Wellcome to the MOVIE SHOW!</h1>
            <p>Discover and Watch for trailers of the best movies.</p>
            <form className="input-search" onSubmit={props.submit}>
                <input type="text" placeholder='Do one Search here' onChange={props.inputChange}/>
                <button type='submit' >
                    <FiSearch/>
                </button>
            </form>
        </div>
    )
}

export default Welcome;