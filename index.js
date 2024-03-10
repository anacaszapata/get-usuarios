

const express= require('express');
const mongoose= require('mongoose');

mongoose.connect('mongodb+srv://anacaszapata:Ng0Rys50wAVCaxOm@cluster0.tys510v.mongodb.net/')
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

usersSchema = mongoose.Schema({
    nombres: String,
    apellidos: String,
    empresa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa' }
});


 userioSchema = mongoose.Schema({
    nombres: String,
    apellidos: String,
    pais: String  
});

 empresasSchema = mongoose.Schema({
    nombre: String,
    ciudad: String 
});


   
   //  2)listado de 10 usuarios
   const User = mongoose.model('User' ,userSchema);

   // 3)listado de todas las empresas
   const empresas = mongoose.model('empresas' ,empresaSchema);

//    4)Listado de usuarios que sean de la empresa id5
    const Usuario = mongoose.model('Usuario', usersSchema);

    // 5)Listado de usuarios que sean de Bangladesh
    const pais = mongoose.model('pais', userioSchema);

    // 6)empresas de la ciudad bangladesh
     const Empresa = mongoose.model('Empresa', empresasSchema);

    


const app = express();
app.use(express.json());


   // 2)listado de 10 usuarios
 app.get('/api/users/limit/:limit',async(req,res)=>{
 const users = await User.find().limit(req.params.limit);
 res.json(users);
 });
 
   // 3)listado de todas las empresas
 app.get('/api/companies',async(req,res)=>{
   const empresa = await empresas.find();
   res.json(empresa);
   });

   // 4)Listado de usuarios que sean de la empresa id 5
 app.get('/api/users/companies/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const users_empresa = await empresas.find({id: parseInt(req.params.id) });
        res.json(users_empresa);
    } catch {
    }
});
//  5)Usuarios que sean de bangladesh
app.get('/api/users/country/:country', async (req, res) => {
    try {
        console.log(req.params.country);
        const usersBangladesh = await User.find({ pais:req.params.country});
        res.json(usersBangladesh);
    } catch (error) {
    }
});

// 6)empresas que sean de la ciudad bangladesh
app.get('/api/companies/city/:city', async (req, res) => {
    try {
        const empresasBangladesh = await Empresa.find({ ciudad: req.params.city });
        res.json(empresasBangladesh);
    } catch (error) {
    }
});




  
app.listen(3000,function(){
    console.log('Servidor escuchando en el puerto 3000');
});
})
  
  

   
   
