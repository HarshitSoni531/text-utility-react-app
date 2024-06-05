import React, { useState } from 'react';

export default function Home(props) {
    const [text, setText] = useState("Enter text here");

    const handleOnChange = (event) => {
        console.log("handling onchange here");
        setText(event.target.value);
    }

    const touppercase = () => {
        console.log("Upper case was clicked");
        const newText = text.toUpperCase();
        setText(newText);
        
        if(text.trim() === ""){
            props.showalert('warning', 'Enter text to perform operations');
        } else {
            props.showalert('success', 'Your text has been converted to upper case');
        }
    }

    const tolowercase = () => {
        console.log("to lower case was clicked");
        const newText = text.toLowerCase();
        setText(newText);
       
        if(text.trim() === ""){
            props.showalert('warning', 'Enter text to perform operations');
        } else {
            props.showalert('success', 'Your text has been converted to lower case');
        }
    }

    const copyText = () => {
        console.log("i am copying your text");
        const textarea = document.getElementById('floatingTextarea');
        textarea.select();
        document.execCommand('copy');
        if(text.trim() === ""){
            props.showalert('warning', 'Enter text to perform operations');
        } else {
            props.showalert('success', 'Your text has been copied');
        }
    }

    const clearText = () => {
        console.log("clear text was clicked");
        const newText = "";
        setText(newText);
        props.showalert('warning', 'Enter text to perform operations');
    }

    return (
        <div className='container my-5'>
            <label htmlFor="floatingTextarea" style={{ fontSize: '35px', fontWeight: 'bold', textAlign: 'left' }}>Enter Text Here - for manipulation</label>
            <div className="form-floating my-10" style={{ alignItems: 'left' }}>
                <textarea className="form-control" value={text} placeholder="Type here...." id="floatingTextarea" rows={8} style={{ border: '1px solid', marginTop: '5px', height: '200px', backgroundColor: props.bg_color, color: props.color }} onChange={handleOnChange}></textarea>
            </div>
            <div className="container my-3" style={{display:'flex',justifyContent:'space-evenly',width:'1000px'}}>
            <button type="button" className="btn btn-primary my-2 mx-3" style={{ width: '200px' }} onClick={touppercase}>Convert to uppercase</button>
            <button type="button" className="btn btn-primary my-2 mx-3" style={{ width: '200px' }} onClick={tolowercase}>Convert to lowercase</button>
            <button type="button" className="btn btn-primary my-2 mx-3" style={{ width: '200px' }} onClick={copyText}>Copy text</button>
            <button type="button" className="btn btn-primary my-2 mx-3" style={{ width: '200px' }} onClick={clearText}>Clear text</button>
            </div>
            <div className="container my-3" style={{ textAlign: 'left' }}>
                <h2>Your text Summary here</h2>
                <p>{text.split(" ").length} Words , {text.length} Characters</p>
            </div>
        </div>
    );
}
