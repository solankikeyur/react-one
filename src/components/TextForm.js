import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showAlert("Text converted to uppercase.", "success");
    }

    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Text converted to lowercase.", "success");

    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    const [text, setText] = useState("Enter Text Here");
    return (
        <>
            <div className={`container mt-4 ${props.mode === "light" ? "text-dark" : "text-light"}`} >
                <div className="mb-3">
                    <label htmlFor='myBox' className="form-label">{props.label}:</label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className='btn btn-primary mx-2' type='button' onClick={handleUpClick}>Uppercase</button>
                <button className='btn btn-primary mx-2' type='button' onClick={handleLowClick}>Lowercase</button>

            </div>
            <div className={`container ${props.mode === "light" ? "text-dark" : "text-light"}`}>
                <h1>Your text summary:</h1>
                <p>{text.split(" ").length} words and {text.length} characters.</p>
                <p>{0.008*text.split(" ").length} Minutes to read.</p>
            </div>
        </>
    )
}
