import { Request, Response } from "express";
import AsignaturaService from "../services/AsignaturaService";

const asignaturaService = new AsignaturaService();

export class AsignaturaController{

    async getAll(req:Request, res:Response){

        try {
            let asignaturas = await asignaturaService.getAll();
            res.json(asignaturas)
        } catch (error) {
            console.log("Error al ejecutar asignatura controller");
        }
        
    }
}