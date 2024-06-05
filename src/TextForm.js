import React, { useState } from 'react';

export default function TextForm() {
    const handleOnChange = (event) => {
        console.log("handling onchange here");
        setText(event.target.value);
    }

    const touppercase = () => {
        console.log("Upper case was clicked");
        const newText = text.toUpperCase();
        setText(newText);
    }

    const [text, setText] = useState("Enter text here");

    return (
        <div>
            <label htmlFor="floatingTextarea" style={{ fontSize: '35px', fontWeight: 'bold' }}>Enter Text Here - for manipulation</label>
            <div className="form-floating my-10" style={{ alignItems: 'left' }}>
                <textarea className="form-control" placeholder="Type here...." id="floatingTextarea" rows={8} style={{ border: '1px solid', marginTop: '5px', height: '200px' }} onChange={handleOnChange}></textarea>
            </div>
            <button type="button" className="btn btn-primary my-2" style={{ width: '100px' }} onClick={touppercase}>Convert to uppercase</button>
        </div>
    );
}
