import axios from 'axios';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import '../CVData/Project.css'

export default function Project() {
  const [projectname, setProjectname] = useState("");
  const [domainname, setDomainname] = useState("");
  const [projecturl, setProjecturl] = useState("");
  const [projectimage1, setProjectimage1] = useState("");
  const [projectimage2, setProjectimage2] = useState("");
  const [projectimage3, setProjectimage3] = useState("");
  const [projectimage4, setProjectimage4] = useState("");
  const [projectimage5, setProjectimage5] = useState("");
  const [projectimage6, setProjectimage6] = useState("");
  const [projectimage7, setProjectimage7] = useState("");
  const [projectimage8, setProjectimage8] = useState("");
  const [projectimage9, setProjectimage9] = useState("");
  const [projectimage10, setProjectimage10] = useState("");
  const [languageused1, setLanguageused1] = useState("");
  const [languageused2, setLanguageused2] = useState("");
  const [languageused3, setLanguageused3] = useState("");
   const [languageused4, setLanguageused4] = useState("");
   const [languageused5, setLanguageused5] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [saved, setSaved] = useState(false);
  const [notSaved, setNotSaved] = useState(false);
  const [picture, setPicture] = useState('');
  const [imageprev, setImageprev] = useState();
  const [imageprevMulti, setImageprevMulti] = useState([]);
  const [imageMulti, setImageMulti] = useState([]);
  const history = useNavigate();
  const [msg, setMsg] = useState('');
  const [userurl, setUserurl] = useState('');
  const [upload, setUpload] = useState('Upload')
  const [portfolioid, setPortfolioid] = useState('');


  const {projectid} =  useParams();

  useEffect(() => {

    const refreshToken = async () => {
      try {
          const response = await axios.get('http://localhost:5000/portfolioadmin/token');
          const decoded = jwtDecode(response.data.accessToken);
          
          setPortfolioid(decoded.userId);
          
          
      } catch (error) {
          if (error.response) {
              history("/login");
              
          }
      }
  }
  
    refreshToken();
   
  }, [portfolioid,history]);




  function multihandleChange(e) { 
  const selectedImages = []
  
  const targetFiles = e.target.files;
  const targeFilesObj = [...targetFiles]
  targeFilesObj.map((file)=>{
    return selectedImages.push(URL.createObjectURL(file))
  })
  setImageprevMulti(selectedImages);



  setImageMulti(targetFiles);
  
    setProjectimage1(targeFilesObj[0].name)
    setProjectimage2(targeFilesObj[1].name)
    setProjectimage3(targeFilesObj[2].name)
    setProjectimage4(targeFilesObj[3].name)
    setProjectimage5(targeFilesObj[4].name)
    setProjectimage6(targeFilesObj[5].name)
    setProjectimage7(targeFilesObj[6].name)
    setProjectimage8(targeFilesObj[7].name)
    setProjectimage9(targeFilesObj[8].name)
    setProjectimage10(targeFilesObj[9].name)
    
  }

  

  function handleChange(e) { 
  setImageprev(URL.createObjectURL(e.target.files[0]));
  const img = e.target.files[0]
  setPicture(img);
  setProjectimage1(e.target.files[0].name)
  }


  const changeOptions = (newOptions) => {
    setUpload(newOptions)
  }

  const handleSubmit = async (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
    try{
      await axios.post('http://localhost:5000/project', {
        //await axios.post('http://localhost:5000/portfolioadmin', {
              
        projectname: projectname,
        domainname: domainname,
        projecturl: projecturl,
        projectimage1: projectimage1,
        projectimage2: projectimage2,
        projectimage3: projectimage3,
        projectimage4: projectimage4,
        projectimage5: projectimage5,
        projectimage6: projectimage6,
        projectimage7: projectimage7,
        projectimage8: projectimage8,
        projectimage9: projectimage9,
        projectimage10: projectimage10,
        languageused1: languageused1,
        languageused2: languageused2,
        languageused3: languageused3,
        languageused4: languageused4,
        languageused5: languageused5,
        duration: duration,
        description: description,
        portfolioid: portfolioid,
  
        
    }).then((result) => {
      //setRegister(true);
      setUserurl(result.data.msg.portfolioadminid);
      console.log(result.data.msg.portfolioadminid);
      console.log(userurl);
      if(result){
        
        history("/authadmin");
      }
    })
    
    }catch (error)  {
      if (error.response) {
        setMsg(error.response.data.message);
    }
    }
    if(upload === 'Single') {
      var formData = new FormData()
      formData.append('file', picture);
    const config = {
      method: "post",
    url: "http://localhost:5000/singleimage",

    data:formData
    };
    axios(config)
    .then((result) => {
      if(result.status === 200){
        setSaved(true); 
      }else{
        setNotSaved(true); 
      }
      
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
  }

  if(upload === 'Multiple') {
    var multiFormData = new FormData()
    for(const image of imageMulti){
      multiFormData.append('file', image)
    }
  
  const config = {

    method: "post",
  url: "http://localhost:5000/multiple",

  data: multiFormData
  };
  axios(config)
  .then((result) => {
    if(result.status === 200){
      setSaved(true); 
    }else{
      setNotSaved(true); 
    }
    
    console.log(result);
  })
  .catch((error) => {
    error = new Error();
  });
}
    

  }

  const updateProject = async (e) => {
    e.preventDefault();
    await axios.patch(`http://localhost:5000/project/${projectid}`,{
      projectname,
        domainname,
        projecturl,
        projectimage1,
        projectimage2,
        projectimage3,
        projectimage4,
        projectimage5,
        projectimage6,
        projectimage7,
        projectimage8,
        projectimage9,
        projectimage10,
        languageused1,
        languageused2,
        languageused3,
        languageused4,
        languageused5,
        duration,
        description,
      portfolioid
    })
    .then((result) => {
     
      console.log(result);
    })
    .catch((error) => {
      error = new Error();
    });
    history(`/home/${portfolioid}`);
    
}



useEffect(() => {
  

  const getProjectById = async () => {
  const res =  await axios.get(`http://localhost:5000/project/one/${projectid}`)
    setProjectname(res.data.projectname);
    setProjecturl(res.data.projecturl);
    setDomainname(res.data.domainname);
    setLanguageused1(res.data.languageused1);
    setLanguageused2(res.data.languageused2);
    setLanguageused3(res.data.languageused3);
    setLanguageused4(res.data.languageused4);
    setLanguageused5(res.data.languageused5);
    setDuration(res.data.duration);
    setDescription(res.data.description);
   
  
  }
  
  getProjectById();

}, [projectid]);

  
  return (
<div className="wrapper_flexP">
      <div className="h2parent">
        <h2 className="login_header">Add A Completed Project</h2>
      </div>
     
      <form encType="multipart/form-data"  id='project' method="post">
        {projectid ? (
<React.Fragment>
<div className="form-group-parent2">
        <div className="form-group"><p className="has-text-centered">{msg}</p></div>
          <div className="input1_parent">
            <input
              type="text"
              id="projectname"
              name="projectname"
              placeholder="Project Name"
              className="form-control"
              value={projectname}
              onChange={(e) => setProjectname(e.target.value)} 
              />
            <label htmlFor="projectname" className="labText">Project Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="projecturl"
              name="projecturl"
              placeholder="Project Link"
              className="form-control"
              value={projecturl}
              onChange={(e) => setProjecturl(e.target.value)}
              />
            <label htmlFor="projecturl" className="labText">Project Link</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="domainname"
              name="domainname"
              placeholder="Project Domain Name"
              className="form-control"
              value={domainname}
              onChange={(e) => setDomainname(e.target.value)}
              />
            <label htmlFor="domainname" className="labText">Project Domain Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused1"
              name="languageused1"
              placeholder="Language/Tools Used No1"
              className="form-control"
              value={languageused1}
              onChange={(e) => setLanguageused1(e.target.value)}
              />
            <label htmlFor="languageused1" className="labText">Language/Tools Used No1</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused2"
              name="languageused2"
              placeholder="Language/Tools Used No2"
              className="form-control"
              value={languageused2}
              onChange={(e) => setLanguageused2(e.target.value)}
              />
            <label htmlFor="languageused2" className="labText">Language/Tools Used No2</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>
        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused3"
              name="languageused3"
              placeholder="Language/Tools Used No3"
              className="form-control"
              value={languageused3}
              onChange={(e) => setLanguageused3(e.target.value)}
              />
            <label htmlFor="languageused3" className="labText">Language/Tools Used No3</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused4"
              name="languageused4"
              placeholder="Language/Tools Used No4"
              className="form-control"
              value={languageused4}
              onChange={(e) => setLanguageused4(e.target.value)}
              />
            <label htmlFor="languageused4" className="labText">Language/Tools Used No4</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused5"
              name="languageused5"
              placeholder="Language/Tools Used No5"
              className="form-control"
              value={languageused5}
              onChange={(e) => setLanguageused5(e.target.value)}
              />
            <label htmlFor="languageused5" className="labText">Language/Tools Used No5</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="text"
              id="duration"
              name="duration"
              
              placeholder="Project Duration"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
               />
            <label htmlFor="duration" className="labText">Project Duration</label>
          </div>
          <div className="help_parent"> <span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
        <div className="description__parent">
            <textarea
             name="description"
              form="project" 
              id="description"
               required placeholder="Describe Your Project Here"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               ></textarea>
            <label htmlFor="description" className="form__label">Describe Your Project</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>
      

        <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">

                <select 
                  onChange={(event) => changeOptions(event.target.value)}
                  value={upload}
                  >
                  <option value="">Choose The Number Of Images To Add</option>
                  <option value="Single">Single</option>
                  <option value="Multiple">Multiple</option>
                  
                  </select>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

    {upload === "Single" ? (
        <div className="form-group-parent-file">
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
    ):(null)}

{upload === "Multiple" ? (
        <div className="form-group-parent-multifile">
           <div className="input_parent">
        <div className='imagehint__parent'>
      <span className='imagehint'>Max 10. only jpg, jpeg,gif and png</span>
      </div>
      </div>
        <div className="fileBtn_parent">
          <input  type="file" name='file' onChange={multihandleChange} accept = 'image/*' multiple = 'multiple' /> 
          </div>
      
          <div className="image_parent-prev">
            {imageprevMulti.map((url)=>(
            <div className='imgprev'>
          <img src={url} className = 'multiImages'  alt= 'projectImagePrev'/>
          </div>
            ))}
          </div>
          
        </div>
    ):(null)}


</React.Fragment>
        ):(
<React.Fragment>
<div className="form-group-parent2">
        <div className="form-group"><p className="has-text-centered">{msg}</p></div>
          <div className="input1_parent">
            <input
              type="text"
              id="projectname"
              name="projectname"
              placeholder="Project Name"
              className="form-control"
              value={projectname}
              onChange={(e) => setProjectname(e.target.value)} 
              />
            <label htmlFor="projectname" className="labText">Project Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="projecturl"
              name="projecturl"
              placeholder="Project Link"
              className="form-control"
              value={projecturl}
              onChange={(e) => setProjecturl(e.target.value)}
              />
            <label htmlFor="projecturl" className="labText">Project Link</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="domainname"
              name="domainname"
              placeholder="Project Domain Name"
              className="form-control"
              value={domainname}
              onChange={(e) => setDomainname(e.target.value)}
              />
            <label htmlFor="domainname" className="labText">Project Domain Name</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused1"
              name="languageused1"
              placeholder="Language/Tools Used No1"
              className="form-control"
              value={languageused1}
              onChange={(e) => setLanguageused1(e.target.value)}
              />
            <label htmlFor="languageused1" className="labText">Language/Tools Used No1</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused2"
              name="languageused2"
              placeholder="Language/Tools Used No2"
              className="form-control"
              value={languageused2}
              onChange={(e) => setLanguageused2(e.target.value)}
              />
            <label htmlFor="languageused2" className="labText">Language/Tools Used No2</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>
        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused3"
              name="languageused3"
              placeholder="Language/Tools Used No3"
              className="form-control"
              value={languageused3}
              onChange={(e) => setLanguageused3(e.target.value)}
              />
            <label htmlFor="languageused3" className="labText">Language/Tools Used No3</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused4"
              name="languageused4"
              placeholder="Language/Tools Used No4"
              className="form-control"
              value={languageused4}
              onChange={(e) => setLanguageused4(e.target.value)}
              />
            <label htmlFor="languageused4" className="labText">Language/Tools Used No4</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input1_parent">
            <input
              type="text"
              id="languageused5"
              name="languageused5"
              placeholder="Language/Tools Used No5"
              className="form-control"
              value={languageused5}
              onChange={(e) => setLanguageused5(e.target.value)}
              />
            <label htmlFor="languageused5" className="labText">Language/Tools Used No5</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
          <div className="input_parent">
            <input
              type="text"
              id="duration"
              name="duration"
              
              placeholder="Project Duration"
              className="form-control"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
               />
            <label htmlFor="duration" className="labText">Project Duration</label>
          </div>
          <div className="help_parent"> <span className="help-block"></span></div>
        </div>

        <div className="form-group-parent2">
        <div className="description__parent">
            <textarea
             name="description"
              form="project" 
              id="description"
               required placeholder="Describe Your Project Here"
               value={description}
               onChange={(e) => setDescription(e.target.value)}
               ></textarea>
            <label htmlFor="description" className="form__label">Describe Your Project</label>
          </div>
          <div className="help_parent"><span className="help-block"></span></div>
        </div>
      

        <div className="form-group-parent2">
                <div className="form-group "></div>
                
                <div className="input_parent">

                <select 
                  onChange={(event) => changeOptions(event.target.value)}
                  value={upload}
                  >
                  <option value="">Choose The Number Of Images To Add</option>
                  <option value="Single">Single</option>
                  <option value="Multiple">Multiple</option>
                  
                  </select>
                </div>
                <div className="help_parent"><span className="help-block"></span></div>
            </div>

    {upload === "Single" ? (
        <div className="form-group-parent-file">
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
    ):(null)}

{upload === "Multiple" ? (
        <div className="form-group-parent-multifile">
           <div className="input_parent">
        <div className='imagehint__parent'>
      <span className='imagehint'>Max 10. only jpg, jpeg,gif and png</span>
      </div>
      </div>
        <div className="fileBtn_parent">
          <input  type="file" name='file' onChange={multihandleChange} accept = 'image/*' multiple = 'multiple' /> 
          </div>
      
          <div className="image_parent-prev">
            {imageprevMulti.map((url)=>(
            <div className='imgprev'>
          <img src={url} className = 'multiImages'  alt= 'projectImagePrev'/>
          </div>
            ))}
          </div>
          
        </div>
    ):(null)}


</React.Fragment>
        )}
        

 

        <div className="form-group-submit-parent">
          <>
          {projectid ? (
            <input type="submit" className="btn_submit" onClick={(e) => updateProject(e)} value="Update" />
          ):(
<input type="submit" className="btn_submit" onClick={(e) => handleSubmit(e)} value="Save" />
          )}
            

            <input type="reset" className="btn-reset" value="Reset" />
          </>
        </div>
       
         
          {saved ? (<p className="text-success">Project Saved</p>) : (null )}
          {notSaved ? (<p className="text-danger">Project Not Saved</p>) : (null )}
      </form>
    </div>
    
      
  );
}
