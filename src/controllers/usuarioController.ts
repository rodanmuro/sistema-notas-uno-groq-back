import { Request, Response } from "express";
import UsuarioService from "../services/UsuarioService";

const usuarioService = new UsuarioService();

export default class UsuarioController{

    async getProfesores(req:Request, res:Response){
        try {
            let profesores = await usuarioService.getProfesores();
            res.json(profesores)
        } catch (error) {
            console.log("Ocurrió un error en  el controlador de usuarios getProfesores");
        }
    }

    async getEstudiantes(req:Request, res:Response){
        try {
            let estudiantes = await usuarioService.getEstudiantes();
            res.json(estudiantes);
        } catch (error) {
            console.log("Ocurrio un error en el controlador de usuarios getEstudiantes");
        }
    }
}