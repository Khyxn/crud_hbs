const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const docente=new Schema({
  nombre:{type:String},
  apellido:{type:String},
  profesion:{type:String},
  imgperfil:{type:String}
},{versionKey:false});

let Profesor=mongoose.model('maestro',docente);
module.exports=Profesor;
// module.exports=mongoose.model('maestro',docente);
