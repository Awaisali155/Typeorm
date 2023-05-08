import express, { Express } from "express";

const docterRoutes=express();
 docterRoutes.use("/",(req,res)=>{

    res.send("Docters")    
 })


export default docterRoutes