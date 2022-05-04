const express = require('express')
const app = express()
var multer = require('multer')
var myStorage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'E:/Reactjs/project2/public/img/sussgest')
  }
, 
  filename: function(req, file, cb){
      cb(null, `${file.fieldname}_${+new Date()}.jpg`)
  }
})
var productSorage = multer.diskStorage({
  destination: function(req, file, cb){
    cb(null, 'E:/Reactjs/project2/public/img/products')
  }
, 
  filename: function(req, file, cb){
      cb(null, `${file.fieldname}_${+new Date()}.jpg`)
  }
})
var cors = require('cors')
var uploader = multer({storage: myStorage})
var uploadProduct = multer({storage: productSorage})
app.use(cors())
app.post('/upload', uploader.single('file') , function(req, res, next){
    const file = req.file
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    res.send(req.file)
})
app.post('/uploadProduct', uploadProduct.single('file') , function(req, res, next){
  const file = req.file
  if (!file) {
    const error = new Error('Please upload a file')
    error.httpStatusCode = 400
    return next(error)
  }
  res.send(req.file)
})
app.listen(3001)