import express ,{Express} from "express";

import patientControler from "../../controlers/patient/patientControler";

const patientRoute=express();

patientRoute.post("/",patientControler.addPatient)
patientRoute.get("/:id?",patientControler.getPatient)

export default patientRoute;

