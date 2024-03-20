import React, {useState}from 'react'

export default function TextForm(props) {
  const[text, setText]=useState('');

  const handler=()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Convert to upperCase","success")
  }
  const hand=()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Convert to LowerCase","success");
  }
  const handlerto=()=>{
    let newtext = '';
    setText(newtext);
    props.showAlert("Clear All","success");
  }
  const handleronclick=(event)=>{
    setText(event.target.value);
  }
  const extraSpace=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Clear Extra Space","success");
  }

  return (
    <>
    <div className="container"  style={{Color: props.mode==='dark'?'white':'black'}}>
        <h1 style={{color: props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
 <div className='mb-3'>
    <label htmlFor="mybox" className='form-label'></label>
    <textarea className='form-control'onChange={handleronclick} style={{backgroundColor: props.mode==='dark'?'gray':'white', color: props.mode==='dark'?'white':'black'}} value={text}id="mybox" rows="6"></textarea>
 </div>
 <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handler}>Convert to UpperCase</button>
 <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={hand}>Convert to LowerCase</button>
 <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handlerto}>Clear</button>
 <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={extraSpace}>Cover Extra Space</button>
    </div>

  <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
    <h1>This is your Summary</h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charactars </p>
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length}  Minimum read time words</p>
    <h3>Preveiw</h3>
    <p>{text.length>0?text:"Nothing to Preveiw"}</p>

  </div>
    </>
  )
 
}

