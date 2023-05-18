import {Request, Response} from "express";
import Docter from "../../models/docter";
export default {
    addDocter: async (req: Request, res: Response) => {
       let docters=[];
       let docter=Docter.create({name:req.body.name,age:req.body.age,type:req.body.type});
       await docter.save();
       docters.push(docter);
       res.send(docter)
    },
    getDocter: async (req: Request, res: Response) => {
    let docter=await Docter.findOne({
        where:{
            id:parseInt(req.params.id)
        }
    })
    res.send(docter)
    },
 


}