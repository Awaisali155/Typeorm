import express, { Express } from "express";
import docterControler from "../../controlers/docter/docterControler";
const docterRoutes=express();
docterRoutes.post("/",docterControler.addDocter)
docterRoutes.get("/:id?",docterControler.getDocter)


export default docterRoutes