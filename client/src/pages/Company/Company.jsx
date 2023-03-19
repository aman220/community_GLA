import React, { useState } from 'react';
import './Company.css'

const Company = () => {
    const [shown, setShown] = React.useState(false);
    const [message, setMessage] = useState('');

    const [updated, setUpdated] = useState(message);

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleClick = () => {
        setUpdated(message);
        setShown(!shown);
    };

    return (
        <div className='company'>
            <div className="Search">
                <input type="text" id="message" name="message" onChange={handleChange} value={message} className="" placeholder='Enter CIN or Company Name'/>
                <button onClick={handleClick} className="button s-icon">Search</button>
            </div>
            {/* <div className="result"> */}
                {shown ? <iframe src={`https://www.tofler.in/search?cin=&q=${updated}`} className="iframe"></iframe> : null}
            {/* </div> */}
        </div>
    );
};

export default Company;