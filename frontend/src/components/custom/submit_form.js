
var submitForm = document.querySelector('#submit');
submitForm.addEventListener('click',sendForm)


function sendForm(event){
    event.preventDefault();
    var fulName = document.querySelector('#name__label');
   
    var fName = fulName.value;
    if(fName === ''){
      var name__err = document.querySelector('.name__err');
      name__err.innerText = 'Enter Full Name!';
      var fulName = document.querySelector('#name__label');
      fulName.addEventListener('keypress',clearErrorText)
      function clearErrorText(event){
        var name__err = document.querySelector('.name__err');
        name__err.style.display = 'none';
      }
      return
    }
    var emailAd = document.querySelector('#email__label');
    var emailA = emailAd.value;
    if(emailA === ''){
      var email__err = document.querySelector('.email__err');
      email__err.innerText = 'Enter Email!';

      var emailAd = document.querySelector('#email__label');
      emailAd.addEventListener('keypress',clearError)
      function clearError(event){
        var email__err = document.querySelector('.email__err');
        email__err.style.display = 'none';
      }
    return
    }
    var msgbody = document.querySelector('#message__label');
    var mbody = msgbody.value;
    if(mbody === ''){
      var message__err = document.querySelector('.message__err');
      message__err.innerText = 'Enter Message!';

      var msgbody = document.querySelector('#message__label');
      msgbody.addEventListener('keypress',clear)
      function clear(event){
        var message__err = document.querySelector('.message__err');
        message__err.style.display = 'none';
      }
    return
    }

    
const url = 'http://localhost:8080/portfolio/contact/submit_form.php';

var randomNumber =  Math.floor((Math.random() * 1000000) + 1)

  const data = {
  fullName: fName,
  email: emailA,
  messageBody: mbody,
  trackingId: randomNumber,
};
console.log(data);
jsondata = JSON.stringify(data);
const otherpara = {
  headers:{
    "content-type": "application.json; charset=UTF-8"
  },
  body: jsondata,
  method: "POST"

};

var sendData =  fetch(url,otherpara)
.then(data=>{return data.json()})
.then(res=>{
  var v = res;
  v.map(id=>{
  var u =  id.trackingid;
    var h = [u]
    for(var i = 0; i < h.length; i++){
      var y = [h[i]];
      
    }
    var confirm = document.querySelector('.confirm');
    confirm.innerText = y;
  })

})
.catch(error=>(console.log(error)))
    
    if(sendData){
      var fName = document.querySelector('#name__label');
      var emailA = document.querySelector('#email__label');
      var mbody = document.querySelector('#message__label');
      var yt = document.querySelectorAll('.form__label')
      console.log(yt);
      for(var i = 0; i < yt.length; i++){
        var s = yt[i];
        s.setAttribute("style",
        `visibility:hidden;
        opacity: 0;
        `)
      }
      fName.value = '';
      if(fName.value == ''){
        fName.setAttribute("placeholder",'Your Name')
      }
      emailA.setAttribute("placeholder",'Your Email')
      emailA.value = '';
      if(emailA.value === ''){
        emailA.setAttribute("placeholder",'Your Email')
      }
      mbody.value = '';
      if(mbody.value == ''){
        mbody.setAttribute("placeholder",'Your Message Here')
      }
  
  }
}


