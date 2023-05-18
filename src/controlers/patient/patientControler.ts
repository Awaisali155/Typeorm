import {Request, Response} from "express";

import Patient from "../../models/patient";
export default {
    addPatient: async (req: Request, res: Response) => {
        let patients=[]

        let patient=Patient.create({name:req.body.name,age:req.body.age,descise:req.body.descise})
        await patient.save();
        patients.push(patient)
        res.send(patients) 
    },

    getPatient:async (req:Request,res:Response)=>{
        let patients=await Patient.findOne({
            where:{
                id:parseInt(req.params.id)
            }
        });        
        res.send(patients)
    }
 


}