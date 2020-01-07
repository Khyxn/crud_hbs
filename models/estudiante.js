const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const estudiante=new Schema({
  nombre:{type:String},
  grado:{type:Number}
  // curso:{type:String}
},{versionKey:false});
let Estudiante=mongoose.model('student',estudiante);
module.exports=Estudiante;
