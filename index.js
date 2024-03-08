
const express= require('express');
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://anacaszapata:5tSP9p7hmKVKViOV@pruebas.jplyxw5.mongodb.net/')
const db=mongoose.connection;

db.on('error',console.error.bind(console,'connection error'));

db.once('open', function(){
    console.log('Connected to MongoDB');
    // model
    userSchema = mongoose.Schema({
        nombres:String,
        apellidos:String
    });
    
const User = mongoose.model('User' ,userSchema);

const app = express();
app.use(express.json());

app.get('/api/users/limit', async (req, res) => {
    try {
        const users = await User.find().limit(10);
        res.json(users);
    } catch (error) {
    }
});

// app.get('/api/users/limit',async(req,res)=>{
// const users = await User.find().limit(10);
// res.json(users);
// });
app.listen(3000,function(){
    console.log('Servidor escuchando en el puerto 3000');
});
})