const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const hbs=require('hbs');
const Estudiante=require('./models/estudiante');
const Profesor=require('./models/profesor');
const guardart=require('./routes/guardart');
const guardare=require('./routes/guardare');
const conexion=require('./config/conexion');
const imagen=require('./routes/upload'); //imagen
//fileupload
const fileUpload=require('express-fileupload');
const app=express();
const port=process.env.PORT || 9000;
app.use(fileUpload());
app.use(express.static(`${__dirname}/public`));
//partials
hbs.registerPartials(`${__dirname}/views/parciales`);
app.set('view engine','hbs');

app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use('/guardart',guardart);
app.use('/guardare',guardare);
//Get
//controller
const sku=require('./controller/profesor');
const wkrp=require('./controller/estudiante');
app.get('/',(req,res)=>{
  res.render('home')
});
app.get('/profesor/nuevo',(req,res)=>{
  res.render('rprofesor',{})
});
// Listado de profesores
app.get('/listado/profesores',(req,res)=>{
  sku.getProfesores(req,res);
});
//Delete
app.get('/docente/:docenteId',(req,res)=>{
   sku.deleteProfesor(req,res);
});
//Put
app.get('/docente/modificar/:id',(req,res)=>{
   sku.updateProfesor(req,res);
});
//estudiante
app.get('/estudiante/nuevo',(req,res)=>{
  res.render('restudiante',{})
})
app.get('/listado/estudiantes',(req,res)=>{
  wkrp.getEstudiantes(req,res);
})
//Delete
app.get('/estudiante/:estudianteId',(req,res)=>{
   wkrp.deleteEstudiante(req,res);
});
//Put
app.get('/estudiante/modificar/:id',(req,res)=>{
   wkrp.updateEstudiante(req,res);
});
app.listen(port,()=>{
  console.log(`Escuchando peticiones en http://localhost:${port}`);
})
