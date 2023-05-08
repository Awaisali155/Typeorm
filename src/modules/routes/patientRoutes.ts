import express ,{Express} from "express";

import patientControler from "../../controlers/patient/patientControler";

const patientRoute=express();


patientRoute.use("/",patientControler.patient)
export default patientRoute;

