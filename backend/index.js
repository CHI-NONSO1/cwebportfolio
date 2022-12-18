const   express   = require( "express");
const  db = require( "./config/db.js");
const  adminRoutes = require( "./routes/admin.js");
const  contactRoutes = require( "./routes/contact.js");
const  cors = require( "cors");
const  dotenv = require( "dotenv");
const  cookieParser = require( "cookie-parser");
//const  imageRoutes = require( "./routes/imageRoute.js");
const  goalRoutes = require( "./routes/goal.js");
const  bioDataRoutes = require( "./routes/biodata.js");
const  eduQualiRoutes = require( "./routes/eduQuali.js");
const  hobbyRoutes = require( "./routes/hobby.js");
const  mottoRoutes = require( "./routes/motto.js");
const  philosophyRoutes = require( "./routes/philosophy.js");
const  workExperienceRoutes = require( "./routes/workExperience.js");
const  referenceRoutes = require( "./routes/reference.js");
const  portfolioAdminRoutes = require( "./routes/portfolioAdmin.js");



dotenv.config();

const  multer  = require( 'multer');
const   { diskStorage } = require( 'multer');
const  path = require( 'path');
const projectRouter = require("./routes/projects.js");
const skillRouter = require("./routes/skills.js");
const letterRouter = require("./routes/letter.js");
const postRouter = require("./routes/Post/post.js");
const commentRouter = require("./routes/Post/comment.js");
const replyRouter = require("./routes/Post/reply.js");




const app = express();
try {
    db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({ credentials:true, origin:'http://localhost:3000' }));


app.use('/contact', contactRoutes); 
app.use('/admins', adminRoutes);
//app.use('/upload', imageRoutes);
app.use('/goal/', goalRoutes);


app.use('/biodata', bioDataRoutes);
app.use('/eduquali', eduQualiRoutes);
app.use('/hobby', hobbyRoutes);
app.use('/motto', mottoRoutes);
app.use('/philosophy', philosophyRoutes);
app.use('/workexperience', workExperienceRoutes);
app.use('/reference', referenceRoutes);
app.use('/portfolioadmin', portfolioAdminRoutes);
app.use('/project', projectRouter);
app.use('/skill', skillRouter);
app.use('/letter', letterRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use('/reply', replyRouter);



app.use(express.static(__dirname + '/portfolio/src/components'));
app.use('/uploads', express.static('uploads'));



var upload = multer({dest:"uploads/"});
var storage = diskStorage({
  destination: function (req, file, cb) {
    //cb(null, './uploads')
    cb(null, '../portfolio/public/image')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })

app.post('/profile', upload.single('file'), function (req, res, next) {

  if (!req.file) {
    throw Error("FILE_MISSING");
  } else {
   return res.send(req.file);
   
  }
  
})



var projectImageUpload = multer({dest:"uploads/"});
var projectImageStorage = diskStorage({
  destination: function (req, file, cb) {
    //cb(null, './uploads')
    cb(null, '../portfolio/public/projectimages')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var projectImageUpload = multer({ storage: projectImageStorage })

app.post('/singleimage', projectImageUpload.single('file'), function (req, res, next) {

  if (!req.file) {
    throw Error("FILE_MISSING");
  } else {
   return res.send(req.file);
  }
  
})

app.post('/multiple', projectImageUpload.array('file', 5), function (req, res, next) {

  if (!req.files) {
    throw Error("FILE_MISSING");
  } else {
   return res.send(req.files);
  }
  
})

var postImageUpload = multer({dest:"uploads/"});
var postImageStorage = diskStorage({
  destination: function (req, file, cb) {
    //cb(null, './uploads')
    cb(null, '../portfolio/public/postimages')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var postImageUpload = multer({ storage: postImageStorage })

app.post('/postimage', postImageUpload.single('file'), function (req, res, next) {

  if (!req.file) {
    throw Error("FILE_MISSING");
  } else {
   return res.send(req.file);
  }
  
})

var postVideoUpload = multer({dest:"uploads/"});
var postVideoStorage = diskStorage({
  destination: function (req, file, cb) {
    //cb(null, './uploads')
    cb(null, '../portfolio/public/postvideos')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var postVideoUpload = multer({ storage: postVideoStorage })

app.post('/postvideo', postVideoUpload.single('file'), function (req, res, next) {

  if (!req.file) {
    throw Error("FILE_MISSING");
  } else {
   return res.send(req.file);
  }
  
})

 
app.listen(5000, () => console.log('Server running at port 5000'));