import express from 'express';
import cors from 'cors';
import errorHandling from './src/error/errorHandling.js'
import UserRouter from './src/routers/user.router.js';

const app = express();

app.set("port", process.env.PORT || 3000)
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(UserRouter)
app.use(function(req, res, next){
        res.status(404).json({error:true, 
                              codigo: 404, 
                              message: "Endpoint doesnt found"})
    })

app.use(errorHandling);

export default app;