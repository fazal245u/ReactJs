const mongoose= require('mongoose')


function db_connect(){
    mongoose.connect('mongodb://localhost:27017/BCA')
.then(function(){
    console.log('Connected to MongoDB')
})
.catch(function(){
    console.log('Error connecting to MongoDB')
})
}
module.exports={db_connect}

// Users.insertOne({name:'jhon',email:'bk@gmail.com',phno:7411141026,role:'adimin',password:'sachin123'})
// .then(function(){
//     console.log('User inserted')
// })
//     .catch(function(){
//         console.log('Error inserting user')

// })


