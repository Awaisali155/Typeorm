import express, { Express } from "express";
import connection from './dataBaseConnection'
 import mainRouter from "./routes";
// this expresRouter is used as app 
const router = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json())
router.use('/', mainRouter)

const PORT = process.env.PORT ?? 6060;
connection.then(() => {
    router.listen(PORT, () => {
        console.log({
            "server": `App is listing on ${PORT}`,
            "dataBase": "Database connected"

        })
    })
}).catch((error) => {
    console.log({
        "message": 'data base connection fail',
        "error": error
    })
})