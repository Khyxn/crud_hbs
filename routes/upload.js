const express=require('express');
const fileUpload=require('express-fileupload');
const app=express();
app.use(fileUpload());
app.put('/upload',(req,res)=>{
  if (!req.files){
    return res.status(400)
    .json({
      ok:false,
      err:{
        menssage:'No se ha seleccionado ningun archivo'
      }
    });
  }
  let archivo=req.files.archivo;
  archivo.mv('filename.jpg',(err)=> {
    if (err)
      return res.status(500).json({
        ok:false,
        err
    });
    res.json({
      ok:true,
      menssage:'Imagen subida correctamente'
    });
  });
});
module.exports=app;
