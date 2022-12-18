const  { createConnection } = require('mysql2');

var con = createConnection({
  host: "localhost",
  user: "-------",
  password: "------",
  database: "-------"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  
  // var sql = `CREATE TABLE portfolioadmin (
  //   portfolioadminid INT AUTO_INCREMENT PRIMARY KEY, 
  //   firstname VARCHAR(255) NOT NULL, 
  //   middlename VARCHAR(255) NULL,
  //   lastname VARCHAR(255) NOT NULL, 
  //   password VARCHAR(255) NOT NULL, 
  //   refresh_token VARCHAR(255) NULL, 
  //   email VARCHAR(255) NOT NULL,
  //   image VARCHAR(255) NULL,
  //   phoneno VARCHAR(255) NULL, 
  //   city VARCHAR(255) NULL,
  //   address VARCHAR(255) NULL,
  //   position VARCHAR(255) NULL,
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Portfolioadmin created");


    
  // });


  // var sql = `CREATE TABLE goal (
  //   goalid INT AUTO_INCREMENT PRIMARY KEY, 
  //   mygoal VARCHAR(1000) NOT NULL, 
  //   portfolioid VARCHAR(255) NOT NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Goal created");

  // });

  // var sql = `CREATE TABLE IF NOT EXISTS nexicontact (
  //   nexicontactid INT AUTO_INCREMENT PRIMARY KEY,
  //   fullname VARCHAR(255) NOT NULL,
  //   email VARCHAR(255) NOT NULL,
  //   message VARCHAR(1000) NOT NULL,
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table nexicontact created");

  // });



  // var sql = `CREATE TABLE biodata (
  //   biodataid INT AUTO_INCREMENT PRIMARY KEY, 
  //   sex VARCHAR(255) NOT NULL, 
  //   dob VARCHAR(255) NOT NULL,
  //   soo VARCHAR(255) NULL, 
  //   marital VARCHAR(255) NOT NULL,
  //   impairment VARCHAR(255) NOT NULL, 
  //   religion VARCHAR(255) NOT NULL,
  //   nationality VARCHAR(255) NOT NULL,
  //   portfolioid VARCHAR(255) NOT NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Biodata created");

  // });


  // var sql = `CREATE TABLE eduquali (
  //   eduqualid INT AUTO_INCREMENT PRIMARY KEY, 
  //   qualiobtained VARCHAR(250) NOT NULL,
  //   institution VARCHAR(250) NOT NULL,
  //   startdate VARCHAR(250) NOT NULL,
  //   enddate VARCHAR(250) NOT NULL,
  //   country VARCHAR(250) NOT NULL,
  //   portfolioid VARCHAR(255) NOT NULL,  
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Education qualification created");

  // });

  // var sql = `CREATE TABLE hobby (
  //   hobbyid INT AUTO_INCREMENT PRIMARY KEY, 
  //   body VARCHAR(1000) NOT NULL, 
  //   portfolioid VARCHAR(255) NOT NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Hobby created");

  // });

  // var sql = `CREATE TABLE motto (
  //   mottoid INT AUTO_INCREMENT PRIMARY KEY, 
  //   body VARCHAR(1000) NOT NULL, 
  //   portfolioid VARCHAR(255) NOT NULL,  
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Motto created");

  // });


  // var sql = `CREATE TABLE philosophy (
  //   philosophyid INT AUTO_INCREMENT PRIMARY KEY, 
  //   body VARCHAR(1000) NOT NULL, 
  //   portfolioid VARCHAR(255) NOT NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Philosophy created");

  // });

  // var sql = `CREATE TABLE workexperience (
  //   workexperienceid INT AUTO_INCREMENT PRIMARY KEY, 
  //   organisation VARCHAR(250) NOT NULL,
  //   position VARCHAR(250) NOT NULL,
  //   startdate VARCHAR(250) NOT NULL,
  //   enddate VARCHAR(250) NOT NULL,
  //   country VARCHAR(250) NOT NULL,
   //   description VARCHAR(1000) NOT NULL,
  //   portfolioid VARCHAR(255) NOT NULL, 
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Workexperience created");

  // });


  // var sql = `CREATE TABLE reference (
  //   referenceid INT AUTO_INCREMENT PRIMARY KEY, 
  //   fullname VARCHAR(250) NOT NULL,
  //   phoneno VARCHAR(15) NOT NULL,
  //   address VARCHAR(250) NOT NULL,
  //   relationship VARCHAR(250) NOT NULL,
  //   portfolioid VARCHAR(255) NOT NULL,  
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Reference created");

  // });

  // var sql = `CREATE TABLE project (
  //   projectid INT AUTO_INCREMENT PRIMARY KEY, 
  //   projectname VARCHAR(250) NOT NULL,
  //   projecturl VARCHAR(250)  NULL,
  //   domainname VARCHAR(250)  NULL,
  //   projectimage1 VARCHAR(250)  NULL,
  //   projectimage2 VARCHAR(250)  NULL,
  //   projectimage3 VARCHAR(250)  NULL,
  //   projectimage4 VARCHAR(250)  NULL,
  //   projectimage5 VARCHAR(250)  NULL,
  //   projectimage6 VARCHAR(250)  NULL,
  //   projectimage7 VARCHAR(250)  NULL,
  //   projectimage8 VARCHAR(250)  NULL,
  //   projectimage9 VARCHAR(250)  NULL,
  //   projectimage10 VARCHAR(250)  NULL,
  //   portfolioid VARCHAR(255) NOT NULL,
  //   languageused1 VARCHAR(250)  NULL,
  //   languageused2 VARCHAR(250)  NULL,
  //   languageused3 VARCHAR(250)  NULL,
  //   languageused4 VARCHAR(250)  NULL,
  //   languageused5 VARCHAR(250)  NULL,
  //   duration VARCHAR(250)  NULL,
  //   description VARCHAR(1000) NOT  NULL,
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Project created");

  // });

  // var sql = `CREATE TABLE coverletter (
  //   coverletterid INT AUTO_INCREMENT PRIMARY KEY, 
  //   receivers_address VARCHAR(250) NOT NULL,
  //   subject VARCHAR(250) NOT  NULL,
  //   message VARCHAR(1000) NOT NULL,
  //   portfolioid VARCHAR(255) NOT NULL,
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Coverletter created");

  // });

  //   var sql = `CREATE TABLE skills (
  //   skillid INT AUTO_INCREMENT PRIMARY KEY, 
  //   skillname1 VARCHAR(250) NOT NULL,
  //   skillname2 VARCHAR(250) NOT NULL,
  //   skillname3 VARCHAR(250) NOT NULL,
  //   skillname4 VARCHAR(250) NOT NULL,
  //   skillname5 VARCHAR(250) NOT NULL,
  //   skillname6 VARCHAR(250)  NULL,
  //   skillname7 VARCHAR(250)  NULL,
  //   skillname8 VARCHAR(250)  NULL,
  //   skillname9 VARCHAR(250)  NULL,
  //   skillname10 VARCHAR(250) NULL,
  //   portfolioid VARCHAR(255) NOT NULL,  
  //   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  //   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
  //   )`;
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table Skills created");

  // });

  
  var sql = `CREATE TABLE posts (
    postid INT AUTO_INCREMENT PRIMARY KEY, 
    author VARCHAR(50) NOT NULL,
    heading VARCHAR(250) NOT  NULL,
    post VARCHAR(2000) NOT NULL,
    category VARCHAR(55) NOT NULL,
    portfolioid VARCHAR(255) NOT NULL,
    image VARCHAR(55)  NULL,
    video VARCHAR(55)  NULL,
    link_post VARCHAR(55)  NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
    )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Posts created");

  });

  var sql = `CREATE TABLE comments (
    commentid INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    email VARCHAR(250) NOT  NULL,
    comment VARCHAR(2000) NOT NULL,
    postid VARCHAR(55) NOT NULL,
    image VARCHAR(55)  NULL,
    video VARCHAR(55)  NULL,
    link_post VARCHAR(55)  NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
    )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Comments created");

  });

  var sql = `CREATE TABLE reply (
    replyid INT AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(50) NOT NULL,
    email VARCHAR(250) NOT  NULL,
    reply VARCHAR(2000) NOT NULL,
    postid VARCHAR(55) NOT NULL,
    commentid VARCHAR(55) NOT NULL,
    image VARCHAR(55)  NULL,
    video VARCHAR(55)  NULL,
    link_post VARCHAR(55)  NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
    )`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Reply created");

  });

});
