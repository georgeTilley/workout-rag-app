import React, { useState } from 'react';
import './/css/button.css'; // Import your CSS file for styling
import Spinner from './Spinner';

const FancySubmitButton = () => {
    const [textInput, setTextInput] = useState('');
    const [submittedText, setSubmittedText] = useState('');

    const handleChange = (e) => {
        setTextInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the text input, like sending it to a server or processing it in some way
        console.log('Submitted text:', textInput);
        // Update the submittedText state to display underneath the input box
        setSubmittedText(textInput);
        // Reset the text input field after submission
        setTextInput('');
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <input
                    className="input-text"
                    type="text"
                    value={textInput}
                    onChange={handleChange}
                    placeholder="Enter text here..."
                />
                <button type="submit" className="fancy-button">Ask?</button>
            </form>
            {submittedText && (
                <div style={{fontWeight: "bold"}} className="submitted-text">
                    <p>Question: {submittedText}?</p>
                    <Spinner/>
                </div>
            )}
        </div>
    );
};

export default FancySubmitButton;
