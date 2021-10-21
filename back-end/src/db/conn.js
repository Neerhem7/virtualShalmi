const mongoose = require('mongoose');

const DB="mongodb+srv://mehr:mehr2000@cluster0.meawe.mongodb.net/virtualshalmi?retryWrites=true&w=majority";
mongoose.connect(DB,{
    
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log(`connect`)
}).catch((err)=>{
    console.log(`error ${err}`);
});
