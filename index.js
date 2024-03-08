
// 2)Listado de 10 usuarios
 const express= require('express');
 const mongoose= require('mongoose');

 mongoose.connect('mongodb+srv://anacaszapata:5tSP9p7hmKVKViOV@pruebas.jplyxw5.mongodb.net/')
 const db=mongoose.connection;

 db.on('error',console.error.bind(console,'connection error'));

db.once('open', function(){
   console.log('Connected to MongoDB');
    //   model
     userSchema = mongoose.Schema({
         nombres:String,
         apellidos:String
     });
     empresaSchema = mongoose.Schema({
        nombre:String,
        nit:String
    });
    empresaSchema = mongoose.Schema({
        nombre:String,
        nit:String
    });

    
    //  2)listado de 10 usuarios
    const User = mongoose.model('User' ,userSchema);

    // 3)listado de todas las empresas
    const empresas = mongoose.model('empresas' ,empresaSchema);

 const app = express();
 app.use(express.json());


    // 2)listado de 10 usuarios
  app.get('/api/users/limit',async(req,res)=>{
  const users = await User.find().limit(10);
  res.json(users);
  });
  
    // 3)listado de todas las empresas
  app.get('/api/companies',async(req,res)=>{
    const empresa = await empresas.find();
    res.json(empresa);
    });

    // 4)Listado de usuarios que sean de la empresa id 5
    app.get('api/users/companies/5',async(req,res)=>{
    const usersempresa = await usersempresa.find()
    })

 app.listen(3000,function(){
     console.log('Servidor escuchando en el puerto 3000');
 });
 })

   
   
