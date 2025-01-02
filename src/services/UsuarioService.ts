import { AppDataSource } from "../data-source";
import { Usuario } from "../entity/Usuario";

export default class UsuarioService{

    async getProfesores():Promise<Usuario[]>{
        let profesores:Usuario[] = [];

        try {
            profesores = await AppDataSource.getRepository(Usuario).find({
                relations:['roles'],
                where:{
                    roles:{
                        role:'profesor'
                    }
                }
            })
        } catch (error) {
            console.log("Se presentó un error al seleccionar los profesores");
            
        }

        return profesores;
    }

}