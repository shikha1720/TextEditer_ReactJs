import React from "react";

export default function About(props) {
    // const [change, setChange] = useState({
    //     color:'black',
    //     backgroundColor: 'white'
    // })

    //const [btntext, setBtnText] = useState('Enable Dark Mode');

    // const modeChange = () => {
    //     if(change.color === 'white'){
    //         setChange({
    //             color:'black',
    //             backgroundColor:'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    //     if(change.color === 'black'){
    //         setChange({
    //             color:'white',
    //             backgroundColor:'black'
    //         })
    //         setBtnText('Enable Light Mode')
    // }
//}

  return (
    <div className="container my-2">
        <h2 className={`text-${props.mode==='light'?'dark':'light'}`}>About Us</h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne" style={{backgroundColor:props.mode==='light'?'white':"rgb(17 71 114)",
              color:props.mode==='light'?'black':'white'}}>
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':"rgb(77 111 138)",
          color:props.mode==='light'?'black':'white'}}>
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo" style={{backgroundColor:props.mode==='light'?'white':"rgb(17 71 114)",
              color:props.mode==='light'?'black':'white'}}>
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':"rgb(77 111 138)",
          color:props.mode==='light'?'black':'white'}}>
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree" style={{backgroundColor:props.mode==='light'?'white':"rgb(17 71 114)",
              color:props.mode==='light'?'black':'white'}}>
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample">
            <div className="accordion-body" style={{backgroundColor:props.mode==='light'?'white':"rgb(77 111 138)",
          color:props.mode==='light'?'black':'white'}}>
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <button className="btn btn-info my-2" onClick={modeChange}>{btntext}</button> */}
    </div>
  );
}
