import express from 'express';
import morgan from 'morgan';
import path from 'path';
import "@babel/polyfill";


const app = express();

app.all("*", function(req, res, next){
    req.headers['if-none-match'] = 'no-match-for-this';
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST, PUT, DELETE, GET, OPTIONS");
    res.header("Access-Control-Max-Age", "3600");
    res.header("Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    next();
});

app.use('/', express.static(path.join(__dirname, '../app')));

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


app.use(morgan('dev'));

app.use(express.json({limit:'50mb'}));

app.use(express.urlencoded({limit:'50mb', extended:true}));

app.use(express.json({type:'application/vnd.api+json'}));

app.get('/', (req, res)=>{
    return res.status(200).sendFile(path.join(__dirname, '../app', 'index.html'));
})

//import routes

import UserRouter from './routes/user.route';


//api path route
app.use("/api/users", UserRouter);

export default app;