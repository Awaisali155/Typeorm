import express, { Express } from "express";
 import docterRoutes from "./modules/routes/docterRoutes";
import patientRoute from "./modules/routes/patientRoutes";


const mainRouter=express();

mainRouter.use("/docter",docterRoutes)
mainRouter.use("/patient",patientRoute)
export default mainRouter;