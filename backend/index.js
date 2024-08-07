const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/user')

const app = express();

app.use(express.json())
app.use(cors())

app.post('/signup', (req, res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => console.log(err))
})
app.post('/login', (req, res) => {
    const {email, password} = req.body
    UserModel.findOne({email : email})
    .then(user => {
        if(user){
            if(user.password === password){
                res.json("Success")
            }else{
                res.json("Invalid credentials")
            }
        }else{
            res.json("User not found")
        }
    })
    .catch(err => console.log(err))
})

mongoose.connect('mongodb://127.0.0.1:27017/Yobek')

app.listen(3001, () =>{
    console.log('server is running')
})
