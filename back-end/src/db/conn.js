const mongoose = require('mongoose');
// mongodb+srv://mehr:2000@cluster0.meawe.mongodb.net/virtualshalmi?retryWrites=true&w=majority
const DB=process.env.DATABASE_SECRET_KEY;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(()=>{
    console.log(`connect`)
}).catch((err)=>{
    console.log(`error ${err}`);
});
