import React, { useState } from 'react'

export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: "green",
        backgroundColor: "black",
        border: "2px solid white"
    });

    const [btnText, setBtnText] = useState("Enable Light Mode");

    const toggleMode = () => {
        if(myStyle.backgroundColor === "black") {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                
            });
            setBtnText("Enable Dark Mode");
        } else {
            setMyStyle({
                color: "green",
                backgroundColor: "black",
                border: "2px solid white"
            });
            setBtnText("Enable Light Mode");
        }
    }

    return (
        <>
        <div className='container mt-4 p-4' style={myStyle}>
            <h1>About Us</h1>
            <div className="card" style={myStyle}>
                <div className="card-body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </div>
            <button className='btn btn-secondary mt-4' onClick={toggleMode} >{btnText}</button>
        </div>
        </>
    )
}
