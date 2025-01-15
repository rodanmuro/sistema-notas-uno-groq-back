import { Request, Response } from 'express';
import { peticion } from '../services/peticionService';

export class QueryController {
    async queryController(req: Request, res: Response) {
        const prompt: string = req.query.prompt as string;
        const response = await peticion(prompt);

        try {
            console.log("Respuesta sin limpiar: ")
            console.log(response);

            res.json(JSON.parse(response));
        } catch (error) {
            console.error("Error ejecutando el queryController:", error);
            res.status(500).json({ message: "Error ejecutando el query controller", error });
        }
    }
}
