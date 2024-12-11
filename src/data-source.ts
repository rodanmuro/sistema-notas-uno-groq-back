import "reflect-metadata"
import { DataSource } from "typeorm"
import { Usuario } from "./entity/Usuario"
import { Role } from "./entity/Role"
import { Periodo } from "./entity/Periodo"
import { Grupo } from "./entity/Grupo"
import { Asignatura } from "./entity/Asignatura"
import { Calificacion } from "./entity/Calificacion"
import "dotenv/config";

export const AppDataSource:DataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST_DB,
    port: parseInt(process.env.PORT_DB),
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    synchronize: false,
    logging: false,
    entities: [Grupo, Periodo, Role, Usuario, Asignatura, Calificacion],
    migrations: [],
    subscribers: [],
})
