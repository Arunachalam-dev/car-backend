let mongose=require('mongoose')
function mongoosedb(){
    mongose.connect('mongodb+srv://arunachalam997607:Arun9976@cluster0.uddzvex.mongodb.net/Pit_Stop',{useunifiedtopology:true,useNewUrlParser: true})

    let connection=mongose.connection;
    connection.on('connected',()=>{
console.log("connection succesfully")
    })

    connection.on('error',()=>{
        console.log("problem to connect with datad base")
    })
}
mongoosedb();
module.exports=mongose
