import React, { useState,useEffect, useRef,forwardRef } from 'react';
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import "./Letter.css";
import "./LetterPreview.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate} from 'react-router-dom';
import styled from 'styled-components';



export default function Letter() {
  const [subject, setSubject] = useState('');
  const [sent, setSent] = useState(false);
  const [portfolioid, setPortfolioid] = useState('');
  const [message, setMessage] = useState('');
  const [receivers_address, setReceivers_address] = useState('');
  const [coverletterid, setCoverletterid] = useState('');
  const [letter, setLetter] = useState([]);
  const [allletter, setAllLetter] = useState([]);
  const [sender_address, setSender_address] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');


  const history = useNavigate();
  let ref = useRef();
 
  const [previewStatus,setPreviewStatus] = useState(false);
  const [previewAllStatus,setPreviewAllStatus] = useState(false);


  useEffect(() => {

    const refreshToken = async () => {
      try {
          const response = await axios.get('http://localhost:5000/portfolioadmin/token');
          const decoded = jwt_decode(response.data.accessToken);
          setPortfolioid(decoded.userId);
          setSender_address(decoded.address);
          setFirstname(decoded.name);
          setLastname(decoded.lastname);
          
      } catch (error) {
          if (error.response) {
              history("/login");
              
          }
      }
  }

    refreshToken();
   
  }, [portfolioid,history]);



  

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    
    e.preventDefault();
    // set configurations
    const configuration = {
      method: "post",
      url: "http://localhost:5000/letter",
      data: {
        message,
        receivers_address,
        subject,
        portfolioid
      }
    };
   
    axios(configuration)
    .then((result) => {
      setLetter([result.data])
      setSent(true);
      setMessage('')
      setSubject('')
      setReceivers_address('')
      setPreviewStatus(true);
      
    })
    .catch((error) => {
      error = new Error();
    });
  }

  const updateLetter = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/letter/${coverletterid}`,{
      message,
      receivers_address,
      subject,
      coverletterid,
      portfolioid
    })
    .then((result) => {
    setMessage('')
    setSubject('')
    setReceivers_address('')
    setSent(true);
    setPreviewStatus(true);

setLetter([result.data])
    
    })
    .catch((error) => {
      error = new Error();
    });

  
  
    
}





const deleteLetter = async (coverletterid) => {
  await axios.delete(`http://localhost:5000/letter/${coverletterid}`);

}

const getLetter = async (coverletterid) => {
  const response = await axios.get(`http://localhost:5000/letter/one/${coverletterid}`);
  setMessage(response.data.message);
  setSubject(response.data.subject);
  setReceivers_address(response.data.receivers_address);
  setCoverletterid(response.data.coverletterid);
}

const getAllLetters = async () => {
  const res = await axios.get(`http://localhost:5000/letter/${portfolioid}`);
  setAllLetter(res.data)
  
}


const ComponentToPrint = forwardRef((props, ref) => {
  return <div ref={ref}>
    

<PreviewLetter show = {previewStatus}>
    

{letter  ?
letter.map((item) =>(
  <React.Fragment>
    <div className='letterwrap'>
    <div className='user__addres-date-flex'> 
    <div className='user__addres-date'>
    <div className='sender__address'>
       {sender_address}
       </div>
      <div className='letter__date'>
      {item.updatedAt}
      </div>
      </div>
      </div>
    <div className='address'>
     <span className='address__item'>{item.receivers_address}</span>
      </div>
    <div className='subject'>{item.subject}</div>
    <div className='message'>{item.message}</div>

    <div className='letter_end-wrap'>
    <div className='first__name'>
      <span className='yours'>Yours Faithfully,</span>
    </div>
    <div className='name__wrap'>
      <span className='first__name'>{firstname}</span>
      <span className='last__name'>{lastname}</span>
      </div>
      </div>
    </div>
    <div className='buttonwrap'>
    <button
          onClick={ () =>{
            getLetter(item.coverletterid)
            setPreviewStatus(false);
           } }
          className="btn_edit">Edit</button>
          
          <span>
          <button 
          onClick={ () =>{ 
            deleteLetter(item.coverletterid) 
            setPreviewStatus(false);
          }} 
          className="btn_del">Delete</button>
          </span>

          <button
          onClick={ () =>{
           
            setPreviewStatus(false);
           } }
          className="btn_close">Close</button>
    </div>
   
  </React.Fragment>

))  : "Loading . . .!"

}


    </PreviewLetter>
    

    </div>





  
})







return(
    <>
    <div className="wrapper_flexB">
        <div className="h2parent">
            <h2 className="login_header">Add Cover Letter</h2>
        </div>
        
        <form  method="post" encType="multipart/form-data">

        <div className="form-group-parent2">
              <div className="form-group"></div>
              
              <div className="input_parent">
              <input
              type="text"
              name="receivers_address" 
              id='receivers_address'
              placeholder='Receivers Address'
              className="form-control"
              value={receivers_address}
              onChange={(e) => setReceivers_address(e.target.value)}
              required/>
              <label htmlFor='receivers_address' className="labText">Receivers Address</label>
              </div>
              <div className="help_parent"><span className="help-block"></span></div>
          </div>

          <div className="form-group-parent2">
              <div className="form-group"></div>
              
              <div className="input_parent">
              <input
              type="text"
              name="subject" 
              id='subject'
              placeholder='Subject'
              className="form-control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required/>
              <label htmlFor='subject' className="labText">Subject</label>
              </div>
              <div className="help_parent"><span className="help-block"></span></div>
          </div>

            <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="message__parent">
                    <textarea
                    name="message"
                    form="message" 
                    id="messagebody"
                    required 
                    placeholder="Write Your Letter Here"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                  <label htmlFor="messagebody" className="form__label"> Write Your Letter Here</label>
          </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

  <div className="form-group-submit-parentl">
    {coverletterid ? (
      <input type="submit" className="btn_submitl" value="Update" 
      onClick={ updateLetter} 
 />
    
    ):(
      <input type="submit" className="btn_submitl" value="Save"  onClick={handleSubmit} />
    )}
  
  

  <input type="reset" className="btn-reset" value="View Letters"
    onClick={ () =>{ 
      getAllLetters() 
      setPreviewAllStatus(true);
    }} 
  
  />
  </div>


     
        {sent ? (
          <p className="text-success">Your Letter Was Saved Successfully</p>
        ) : (
          <p className="text-danger"></p>
        )}
        </form>
    </div>


    {/*        */}
    <PreviewAllLetter show = {previewAllStatus}>
      <div className='close__BTN'>
      <button
          onClick={ () =>{
           
            setPreviewAllStatus(false);
           } }
          className="btn_close">Close</button>
      </div>
    {allletter  ?
allletter.map((item) =>(
  <React.Fragment>
    <div className='letterwrap'>
    <div className='user__addres-date-flex'> 
    <div className='user__addres-date'>
    <div className='sender__address'>
       {sender_address}
       </div>
      <div className='letter__date'>
      {item.updatedAt}
      </div>
      </div>
      </div>
    <div className='address'>
    <span className='address__item'>{item.receivers_address}</span>
      </div>
    <div className='subject'>{item.subject}</div>

    <div className='greeting'>
      <span className='rec__greeting'>Dear Sir/Ma,</span>
    </div>
    <div className='message'>{item.message}</div>
    
    <div className='letter_end-wrap'>
    <div className='first__name'>
      <span className='yours'>Yours Faithfully,</span>
    </div>
    <div className='name__wrap'>
      <span className='first__name'>{firstname}</span>
      <span className='last__name'>{lastname}</span>
      </div>
      </div>

    </div>
    <div className='buttonwrap'>
    <button
          onClick={ () =>{
            getLetter(item.coverletterid)
            setPreviewStatus(false);
           } }
          className="btn_edit">Edit</button>
          
          <span className='del__btn'>
          <button 
          onClick={ () =>{ 
            deleteLetter(item.coverletterid) 
            setPreviewStatus(false);
          }} 
          className="btn_del">Delete</button>
          </span>

        
    </div>
   
  </React.Fragment>

))  : "Loading . . .!"

}
</PreviewAllLetter>
    {/*        */}


    {previewStatus === true ? (
      <div>
      <ReactToPrint content={() => ref.current}>
      <PrintContextConsumer>
      {({handlePrint}) => (
       <button className='printBTN' onClick={() =>{handlePrint() }} >Print Letter</button> )}
      </PrintContextConsumer>
      </ReactToPrint>
      <ComponentToPrint  ref={ref} />
      </div>
    ):(null)}



</>
  
);
}


const PreviewLetter = styled.div` 
width:72%;
height:130%;
transition: all .3s linear;
z-index:25;
position:absolute;
top:10%;
right:-9%;
background #fff;
overflow-x:hidden;
overflow-y:scroll;

transform: ${props => props.show ? 'translateX(0)': 'translateX(150%)'};
@media (max-width:820px){
width:96%;
height:130%;
position:absolute;
top:0%;
right: -4%;

}
`
const PreviewAllLetter = styled.div` 
width:72%;
height:130%;
transition: all .3s linear;
z-index:25;
position:absolute;
top:10%;
right:-9%;
background #fff;
overflow-x:hidden;
overflow-y:scroll;

transform: ${props => props.show ? 'translateX(0)': 'translateX(150%)'};
@media (max-width:820px){
width:96%;
height:130%;
position:absolute;
top:0%;
right: -4%;

}
`