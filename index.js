const dotenv = require("dotenv").config()
const express = require("express");
const cors = require("cors");
const multer = require('multer')
const usersRouter = require('./routers/usersRouter')
const postsRouter = require('./routers/postsRouter')
const coursesRouter = require('./routers/coursesRouter')
const commentsRouter = require('./routers/commentsRouter')
const bodyParser = require('body-parser')

const app = express();
const port = 8000;
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(cors())
// app.use(express.static('public'));

// const storage = multer.diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,"./public/images")
//     },
//     filename:(req,file,cb)=>{
//         cb(null,Date.now() + file.originalname)
//     }
//   })

const upload = multer({storage: storage})

app.post('/upload',upload.single("file"),(req,res)=>{
    res.json(req.file.filename)
})

require('./config/database')
app.use('/users',usersRouter)
app.use('/posts',postsRouter)
app.use('/courses',coursesRouter)
app.use('/comments',commentsRouter)

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})
