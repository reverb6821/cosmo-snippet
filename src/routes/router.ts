import express, { Request, Response } from "express"

export const router = express.Router();

router.get("/api", async (req: Request, res: Response) => {
    try {
        res.status(200).send(res.json({ message: 'Welcome to Andromeda' }));
    } catch (e) {
        res.status(500).send(`ERROR: ${e}`);
    }
});