import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textforms(props) {
  const HandleUpCase = ()=>
  {
    // console.log("upper Case was Clicked" + text);
    let newText=text.toUpperCase();  //converting the value the 'text' variable to the uppercase.
    setText(newText);   //setting the new upper case text to text variable.
  }

  const HandleLowerCase = ()=>
  {
    let newtext=text.toLowerCase();
    setText(newtext);
  }

  const HandleClear = ()=>
  {
    let newtext='';
    setText(newtext);

    findWord(newtext);
    replaceWord(newtext)

  }

  const HandleOnChange = (event)=>
  {
    // console.log("On changed");
    setText(event.target.value); //setting the value of the textarea to the 'text' variable
  }

  const HandleOnFind = (event)=>
  {
    findWord(event.target.value);
  }

  const HandleOnReplace = (event)=>
  {
    replaceWord(event.target.value);
  }

  const HandleReplaceClick = ()=>
  {
    let newtext=text.replaceAll(fWord,rWord);
    setText(newtext);
  }

  const HandleCopy = ()=>
  {
    let text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const HandleExtraSpace = ()=>
    {
      let newText=text.split(/[ ]+/);
      setText(newText.join(" "));
    }


  const [myStyle,SetMyStyle] = useState(
  {
      fontFamily:'Arial',
  });


  const toogleStyle = ()=>
  {
    if(myStyle.fontFamily == 'Times New Roman')
      {
        SetMyStyle({
            fontFamily: 'Arial',
        });
        
      }
  
    else
    {
        SetMyStyle({
          fontFamily: 'Times New Roman',
        });
      
    }
  }

  const[text, setText]= useState('Enter the text here!!');
  // text="new text";  //wrong way to update the text.
  // setText("new text");  //Correct way to upate the text using settext.
  const[fWord,findWord]=useState("");
  const[rWord,replaceWord]=useState("");
  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
      <div className="mb-3">
        {/* <label htmlFor="myBox" className="form-label">Example textarea</label> */}
        <textarea className="form-control" id="myBox" rows="8"  value={text} onChange={HandleOnChange} style={{ ...myStyle , backgroundColor : props.mode=='dark' ? 'black':'white', color : props.mode=='dark' ? 'white':'black'}}></textarea>
      </div>
      <button className="btn btn-primary"  onClick={HandleUpCase}>Convert to UpperCase</button>

      <button className="btn btn-primary mx-2"  onClick={HandleLowerCase}>Convert to LowerCase</button>

      <button className="btn btn-primary mx-2"  onClick={HandleCopy}>Copy Text</button>

      <button className="btn btn-primary mx-2"  onClick={HandleExtraSpace}>Remove Extra Space</button>

      <button className="btn btn-primary mx-2"  onClick={toogleStyle}>Toggle Font</button>
      
      <button className="btn btn-primary mx-2"  onClick={HandleClear}>Clear Text</button>
      <br/><br/>
      
    </div>

    <div className="container">
    <textarea className="form-control-sm" id="myFind" rows="1" placeholder='Find word' value={fWord} onChange={HandleOnFind}  style={{backgroundColor : props.mode=='dark' ? 'black':'white', color : props.mode=='dark' ? 'white':'black'}}></textarea>

      <textarea className="form-control-sm mx-2" id="myReplace" rows="1" placeholder='Replace word'   value={rWord} onChange={HandleOnReplace}  style={{backgroundColor : props.mode=='dark' ? 'black':'white', color : props.mode=='dark' ? 'white':'black'}}></textarea>
      <br />
      <button className="btn btn-primary"  onClick={HandleReplaceClick}>Replace</button>
    </div>


    <div className="container my-3">
      <h1>Your Summary</h1>
      <h5>{text.split(" ").length} words and {text.length} characters</h5>
    </div>
    </>
  )
}
