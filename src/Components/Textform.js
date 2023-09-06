import React, { useState } from "react";

function Textform(props) {
  //handle text from text area
  const handleText = (event) => {
    setText(event.target.value);
  };
  // convert to upper case
  const convertUppercase = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  //convert to lover case
  const convertLowercase = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  // clear text
  const clearText = () => {
    setText("");
    props.showAlert("Text box cleared!", "warning");
  };

  //random text
  const randomText = () => {
    setText(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet consectetur adipiscing elit ut aliquam. Erat imperdiet sed euismod nisi porta lorem. Elementum facilisis leo vel fringilla est ullamcorper eget nulla. Ipsum a arcu cursus vitae congue. Sed faucibus turpis in eu mi bibendum neque. Viverra adipiscing at in tellus integer feugiat. Vitae aliquet nec ullamcorper sit amet. Rutrum quisque non tellus orci ac auctor. Vehicula ipsum a arcu cursus vitae congue. Gravida in fermentum et sollicitudin ac orci. Egestas purus viverra accumsan in nisl nisi. Id interdum velit laoreet id donec ultrices tincidunt arcu non. Nisl nisi scelerisque eu ultrices vitae auctor eu augue. At lectus urna duis convallis convallis tellus. Vulputate odio ut enim blandit."
    );
    props.showAlert("Random text typed!", "success");
  };

  //audio of text
  const soundText = () => {
    let msg = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(msg);
    const toogle = document.getElementById("toggle");
    if (toogle.textContent === "Speak") {
      props.showAlert("Audio started!", "success");
      toogle.innerHTML = "Stop";
    } else {
      toogle.innerHTML = "Speak";
      if ((toogle.innerHTML === "Speak")) {
        window.speechSynthesis.cancel();
        props.showAlert("Audio stoped!", "warning");
      }
    }
  };

  //copy text
  const copyText = () => {
    // var dummy = document.getElementById("text");
    // dummy.select();
    navigator.clipboard.writeText(text);
    //document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  };

  //remove extra space
  const removeExtraSpace = () => {
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space is removed from text!", "success");
  };

  //first letter capital
  const capitalizeText = () => {
    const newText = text.split(" ");
    for (let i = 0; i < newText.length; i++) {
      newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1);
    }
    setText(newText.join(" "));
    props.showAlert("First letter of all the words captilized!", "success");

  };

  // state
  const [text, setText] = useState("");

  return (
    <>
      <div
        className={`container m-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h2>TextEditor</h2>
        <div className="mb-3">
          <textarea
            className={`form-control text-${props.mode === "light" ? "dark" : "light"}`}
            id="text"
            rows="8"
            // cols="150"
            value={text} //popps
            onChange={handleText}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(77 111 138)",
              border:
                props.mode === "light" ? "1px solid black" : "1px solid white",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertUppercase}>
          Convert to Upper Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={convertLowercase}>
          Convert to Lower Case
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={clearText}>
          Clear
        </button>
        <button disabled={text.length>0} className="btn btn-primary mx-1 my-1" onClick={randomText}>
          Random Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={copyText}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={removeExtraSpace}>
          Remove Extra Space
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={capitalizeText}>
          Capitalize
        </button>
        <button disabled={text.length===0} className="btn btn-primary" id="toggle" onClick={soundText}>
          Speak
        </button>
      </div>
      <div
        className={`container m-3 text-${
          props.mode === "light" ? "dark" : "light"
        }`}
      >
        <h3>Text Summary</h3>
        <li>Words : {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} </li>
        <li>Characters : {text.length}</li>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
export default Textform;
