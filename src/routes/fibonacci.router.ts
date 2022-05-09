// External Dependencies
import express, { Request, Response } from "express"; 
import { fibonacciTools } from "../model/fibonacci";
// Global Config
export const fibonnaciRouter = express.Router();

//intea
let cacheLog: any[]= [];

fibonnaciRouter.use(express.json());
// GET
fibonnaciRouter.get("/", async (_req: Request, res: Response) => {
    try {
       
        res.status(200).send(cacheLog);
    } catch (error: any) {
        res.status(500).send(error.message);
    }
});
// POST
fibonnaciRouter.post("/:numberOfFib", async (req: Request, res: Response) => {
    try {
        // WE don't have DB so we add to our cache array.
        let numberOfFib: number = Number(req?.params?.numberOfFib);
        const fibonnaci : Array<number> = fibonacciTools.getFibonnaciArray(numberOfFib);
        cacheLog.push({
            id: Date.now(),
            createdOn: (new Date()).toLocaleDateString(),
            FibonnaciQuery: fibonnaci
        });
        res.status(201).send(cacheLog);
        //     : res.status(500).send("Failed to create a new fibonnaci.");
    } catch (error: any) {
        console.error(error);
        res.status(400).send(error.message);
    }
});
// PUT

// DELETE