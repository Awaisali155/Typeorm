import express ,{Express} from "express";



const patientRoute=express();


patientRoute.use("/",(req,res)=>{
    res.send("Patient")
    
})
export default patientRoute;

