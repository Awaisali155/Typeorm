import express, { Express } from "express";
import docterControler from "../../controlers/docter/docterControler";
const docterRoutes=express();
 docterRoutes.use("/",docterControler.docter)


export default docterRoutes