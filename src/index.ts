import express, { Express } from "express";
import connection from './dataBaseConnection'

// this expresRouter is used as app 
const router = express();

router.use(express.urlencoded({ extended: false }));
router.use(express.json())


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