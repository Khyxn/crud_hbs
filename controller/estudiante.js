const Estudiante=require('../models/estudiante');
getEstudiantes=(req,res)=>{
  Estudiante.find({},(err,estudiantes)=>{
    if (err) {
      return res.status(500).send({mensaje:`Error al mostrar los estudiantes ${err}`})
    }
    res.render('lestudiante',{estudiantes})
  });
};
deleteEstudiante=(req,res)=>{
  let estudianteId=req.params.estudianteId;
  Estudiante.findById(estudianteId,(err,estudiante)=>{
    if (err) {
      res.status(500).send({mensaje:`Error al eliminar al estudiante ${err}`})
    }
    estudiante.remove(err=>{
      if (err) {
        res.status(500).send({mensaje:`Error al eliminar al estudiante ${err}`})
      }
      console.log('El estudiante ha sido eliminado con exito')
      res.redirect('/listado/estudiantes');
    });
  });
};
updateEstudiante=(req,res)=>{
  let id=req.params.id;
  let update=req.body;
  Estudiante.findByIdAndUpdate(id,update,(err,estudianteUpdated)=>{
    if (err) {
      res.status(500).send({mensaje:`Error al actualizar el estudiante ${err}`})
    }
    res.render('restudiante',{estudiante:estudianteUpdated});
  });
};
module.exports={
  getEstudiantes,
  deleteEstudiante,
  updateEstudiante
}
