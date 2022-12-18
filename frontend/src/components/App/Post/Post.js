import React, { useState, useEffect } from 'react';
import "./CSS/Post.css";
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useNavigate, useParams } from 'react-router-dom';

export default function Post() {

  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [imageprev, setImageprev] = useState();
  const [video, setVideo] = useState('');
  const [videoFile, setVideoFile] = useState('');
  const [videoprev, setVideoprev] = useState('');
  const [category, setCategory] = useState('Category');
  const [heading, setHeading] = useState('');
  const [post, setPost] = useState('');
  const [link_post, setLink_post] = useState('');
  const [portfolioid, setPortfolioid] = useState('');
  const [picture, setPicture] = useState('');
  const [msg, setMsg] = useState('');
  //const [posted, setPosted] = useState(false);
 
  const {postid} = useParams();
  const history = useNavigate();
 

  const changeCategory = (newCategory) => {
    setCategory(newCategory)
  }

  function handleChange(e) { 
    setImageprev(URL.createObjectURL(e.target.files[0]));
    const img = e.target.files[0]
    setPicture(img);
    setImage(e.target.files[0].name)
    }

    function handleVideo(e) { 
      setVideoprev(URL.createObjectURL(e.target.files[0]));
      const vid = e.target.files[0]
      setVideoFile(vid);
      setVideo(e.target.files[0].name)
      console.log(vid);
      }
  
    
 
  useEffect(() => {

    const refreshToken = async () => {
      try {
          const response = await axios.get('http://localhost:5000/portfolioadmin/token');
          const decoded = jwt_decode(response.data.accessToken);
          setPortfolioid(decoded.userId);
          setAuthor(decoded.name);
          
      } catch (error) {
          if (error.response) {
              history("/login");
              
          }
      }
  }

    refreshToken();
   
  }, [portfolioid,history]);

  function clearEntry(){
    setPost('')
    setHeading('')
    setLink_post('')
  }

  const handleSubmit = async (e) => {

    // prevent the form from refreshing the whole page
    
    e.preventDefault();
    // set configurations
    try{
      await axios.post('http://localhost:5000/post', {
   
        post:        post,
        image:       image,
        video:       video,
        heading:     heading,
        author:      author,
        link_post:   link_post,
        portfolioid: portfolioid,
        category: category
 })
 .then((result) => {
  setPost('')
  setHeading('')
  setLink_post('')
      //setGoal(true);
      console.log(result);
    })
  }catch (error)  {
    if (error.response) {
      setMsg(error.response.data.message);
  }
  }

    var formData = new FormData()
    formData.append('file', picture);
  const config = {
    method: "post",
  url: "http://localhost:5000/postimage",
  data:formData
  };
  axios(config)
  .then((result) => {
    
    console.log(result);
  })
  .catch((error) => {
    error = new Error();
  });

  var formDataV = new FormData()
  formDataV.append('file', videoFile);
const configu = {
  method: "post",
url: "http://localhost:5000/postvideo",
data:formDataV
};
axios(configu)
.then((result) => {
  
  console.log(result);
})
.catch((error) => {
  error = new Error();
});
  }

  const updatePost = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/post/${postid}`,{
      post,
      image,
      video,
      heading,
      author,
      link_post,
      postid,
      portfolioid,
      category
    })
    .then((result) => {
      setPost('')
      //setGoal(true);
      console.log(result);

      var formData = new FormData()
      formData.append('file', picture);
    const config = {
      method: "post",
    url: "http://localhost:5000/postimage",
    data:formData
    };
    axios(config)
    .then((result) => {
      
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}

useEffect(() => {

  const getPostById = async () => {
    const response = await axios.get(`http://localhost:5000/post/one/${postid}`);
    setPost(response.data.post);
    setHeading(response.data.heading);
    setAuthor(response.data.author);
    setLink_post(response.data.link_post);
    
  }
  
  getPostById();
}, [postid]);


  return (
    <div className="post__wrapper-flex">
        <div className="h2parent">
            <h2 className="login_header">Create A Post</h2>
        </div>
    <form  method="post" encType="multipart/form-data">
         
  <div className="form-group-parent1">
  
  <div className="input_parent">
    <select 
    onChange={(event) => changeCategory(event.target.value)}
    value={category}
    >
    <option value="">Select Category</option>
    <option value="TechTack">Tech Stack</option>
    <option value="Education">Education</option>
    <option value="Physics">Physics</option>
    </select>
    </div>

    <div className="help_parent">
      <span className="help-block">{msg}</span>
      </div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text" 
    id='pheading'
    name="heading" 
    placeholder='Post Heading'
    className="form-control" 
    value={heading}
    onChange={(e) => setHeading(e.target.value)} 
    />
    <label htmlFor='pheading' className="labText">Post Heading </label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>

<div className="form-group-parent1">
    <div className="form-group"></div>
    
    <div className="input_parent">
    <input
    type="text" 
    id='link'
    name="link" 
    placeholder='Add External Link'
    className="form-control" 
    value={link_post}
    onChange={(e) => setLink_post(e.target.value)} 
    />
    <label htmlFor='link' className="labText"> Add External Link</label>
    </div>
    <div className="help_parent"><span className="help-block"></span></div>
</div>


<div className="form-group-parent1">
                <div className="form-group "></div>
                
                <div className="message__parent">
                  
                  {postid? (
                    <>
                     <textarea
                     name="post"
                      form="post" 
                      id="post__label"
                       required placeholder= "Write Your Post Here"
                       value={post}
                       onChange={(e) => setPost(e.target.value)}
                       ></textarea>
                    <label htmlFor="post__label" className="form__label">Update Post</label>
                    </>
                  ):(
                    <>
                    <textarea
                    name="post"
                     form="post" 
                     id="post2__label"
                      required placeholder="Write Your Post Here"
                      value={post}
                      onChange={(e) => setPost(e.target.value)}
                      ></textarea>
                   <label htmlFor="post2__label" className="form__label">Write Your Post Here</label>
                   </>
                  )}
           
          </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>



<div className="form-group-parent--image-file">
  <div className="fileBtn_parent">
    <input  type="file" name='file' onChange={handleChange} /> 
 
    </div>

    <div className="img_parent">
    <img
    className="img_content"
    alt='avatarimg' 
    src={imageprev}
    id="profileDisplay" />
    
    </div>
  </div>

  <div className="form-group-parent--video-file">
  <div className="fileBtn_parent">
    <input  type="file" name='file' onChange={handleVideo} /> 
 
    </div>

    <div className="video_parent">
    <video  id="videoDisplay"  className="video_content"  width={300} height={300} controls>
   
    <source src={videoprev} type = "video/mp4" />
   </video>
    
    </div>
  </div> 

  <div className="form-group-submit-parent">
    {postid ? (
      <input type="submit" className="btn_submit" value="Update"  onClick={updatePost} />
    ):(
      <input type="submit" className="btn_submit" value="Save"  onClick={handleSubmit} />
    )}
  
  

  <input type="reset" className="btn-reset" value="Reset" onClick={clearEntry}  />
  </div>
</form>
</div>
  )
}
