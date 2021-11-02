const mongoose = require('mongoose');
// mongodb+srv://mehr:2000@cluster0.meawe.mongodb.net/virtualshalmi?retryWrites=true&w=majority
const DB="mongodb+srv://mehr:mehr2000@cluster0.meawe.mongodb.net/VirtualShalmi?retryWrites=true&w=majority";
mongoose.connect(DB,{
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(()=>{
    console.log(`connect`)
}).catch((err)=>{
    console.log(`error ${err}`);
});
