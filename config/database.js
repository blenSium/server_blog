const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:159aknv@cluster0.mz7o1v9.mongodb.net/blogDB?retryWrites=true&w=majority',()=>console.log("connected to database"))