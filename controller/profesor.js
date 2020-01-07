const Profesor=require('../models/profesor');
//getprofesor
getProfesores=(req,res)=>{
Profesor.find({},(err,profesores)=>{
  if (err) {
    return res.status(500).send({mensaje:`Error al mostrar los datos ${err}`})
  }
  res.render('lprofesor',{profesores})
});
};

//delete profesor
deleteProfesor=(req,res)=>{
let docenteId=req.params.docenteId;
Profesor.findById(docenteId,(err,docente)=>{
  if (err) {
    res.status(500).send({mensaje:`Error al eliminar el docente ${err}`})
  }
  docente.remove(err=>{
    if (err) {
      res.status(500).send({mensaje:`Error al eliminar el docente ${err}`})
    }
    console.log('El docente ha sido eliminado con exito');
   res.redirect('/listado/profesores');
 });
});
};

//update profesor
updateProfesor=(req,res)=>{
let id=req.params.id;
let update=req.body;
Profesor.findByIdAndUpdate(id,update,(err,docenteUpdated)=>{
  if (err) {
    res.status(500).send({mensaje:`Error al actualizar el docente ${err}`})
  }
  res.render('rprofesor',{docente:docenteUpdated});
});
};

module.exports={
  getProfesores,
  deleteProfesor,
  updateProfesor
}
