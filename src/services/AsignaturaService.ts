import { Asignatura } from "../entity/Asignatura";
import { AppDataSource } from "../data-source";

export default class AsignaturaService{

    async getAll():Promise<Asignatura[]> {

        let asignaturas:Asignatura[] = [];

        try {
            asignaturas = await AppDataSource.manager.find(Asignatura);   
        } catch (error) {
            console.log("Error ejecutando el query getAll en asignaturas");
        }

        return asignaturas;
    }

}