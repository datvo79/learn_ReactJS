import React, { useState } from 'react';
import PropTypes from 'prop-types';

Test_useState.propTypes = {
    
};

function Test_useState(props) {
    const [text, setText] = useState('') //tạo
    const [texts, setTexts] = useState([])

    const handleSubmit = () => {
        setTexts(prev => [...prev, text])
        setText('')
    }
    return (
        <div style={{padding : 40}}>
            <input value={text} onChange={event => setText(event.target.value)} />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {texts.map((text, index) => (
                    <li key = {index}>{text}</li>
                ))}
            </ul>
        </div>
    );
}

export default Test_useState;