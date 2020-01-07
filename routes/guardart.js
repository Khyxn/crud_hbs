const express=require('express');
// const app=express();
const router = express.Router();
const Profesor=require('../models/profesor');
router.post('/docente/insertar',(req,res)=>{
  if (req.body._id === "") {
  let docente=new Profesor({
    cedula:req.body.cedula,
    nombre:req.body.nombre,
    apellido:req.body.apellido,
    profesion:req.body.profesion,
    imgperfil:req.body.imgperfil
    });
  docente.save();
  }
    else{
      Profesor.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
        if (err) throw err;
      });
    }
    res.redirect('/listado/profesores');
  });

module.exports=router;
