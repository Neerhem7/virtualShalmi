const mongoose = require('mongoose');

const DB=process.env.DATABASE_SECRET_KEY;
mongoose.connect(DB,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify:true
}).then(()=>{
    console.log(`connect`)
}).catch((err)=>{
    console.log(`error`);
});
