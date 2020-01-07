const express=require('express');
const router=express.Router();
const Estudiante=require('../models/estudiante');
router.post('/estudiante/insertar',(req,res)=>{
  if (req.body._id==='') {
    let estudiante=new Estudiante({
      nombre:req.body.nombre,
      grado:req.body.grado
    });
    estudiante.save();
  }
  else{
    Estudiante.findByIdAndUpdate(req.body._id,{$set:req.body},{new:true},(err,model)=>{
      if(err) throw err;
    });
  }
  res.redirect('/listado/estudiantes');
});
module.exports=router;
