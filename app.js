const mongoose = require("mongoose")
const url_bd="mongodb://localhost:27017/autos"

mongoose.connect(url_bd)
.then(() => {
    console.log("Jala la conexion")
})
.catch((err) => {
    console.log("No jalo la conexion")
})

const esquema_abarrotes = new mongoose.Schema({
    marca:{
        type:String
    },
    modelo:{
        type:String 
    },
    año:{
        type:Number
    },
    precio:{
        type:Number
    },
    color:{
        type:String
    },
    kilometraje:{
        type:Number
    },
    peso_kilos:{
        type:Number
    }
    
})

const modelo_abarrotes = new mongoose.model("Tabla de datos personales", esquema_abarrotes)
modelo_abarrotes.create({
    marca:"toyota",
    modelo:"corolla",
    año:"2020",
    precio:"20000",
    color:"blanco",
    kilometraje:"15000",
    peso_kilos:"10000",
})