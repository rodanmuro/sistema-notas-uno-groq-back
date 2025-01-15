import 'dotenv/config';
import * as fs from "fs";
import Groq from 'groq-sdk';

const cliente = new Groq(
    {
        apiKey: process.env.GROQ_API_KEY
    }
);

const asignaturaEntity = fs.readFileSync("src/entity/Asignatura.ts");
const calificacionEntity = fs.readFileSync("src/entity/Calificacion.ts");
const grupoEntity = fs.readFileSync("src/entity/Grupo.ts");
const periodoEntity = fs.readFileSync("src/entity/Periodo.ts");
const roleEntity = fs.readFileSync("src/entity/Role.ts");
const usuarioEntity = fs.readFileSync("src/entity/Usuario.ts");

const descriptionAllEntities = fs.readFileSync("src/files/plain-text-db.txt");


const allEntitiesFilesContent = descriptionAllEntities;

/*asignaturaEntity + " "
    + calificacionEntity + " "
    + grupoEntity + " "
    + periodoEntity + " "
    + roleEntity + " "
    + usuarioEntity;*/




export async function peticion(mensaje: string): Promise<string> {

    const response = await cliente.chat.completions.create(
        {
            model: "llama3-70b-8192",
            messages: [
                {
                    role: "system",
                    content: "these are the entities in typescript using typeorm of system grades "
                        + allEntitiesFilesContent +"."
                        + " You are an asisstant that creates sql queries, and for every request of the query "
                        + " you will return a json with this structure {\"sql\":'you will write the sql query here'}, this json structure has double quoutes for the key and double quotes for the value "
                        + " if the user send you a prompt dont related with the context, or that you can not put it in a sql query  or is just greeting then return "
                        + " a json with this structure {\"error\":\"No se como responder dicha pregunta\"} this json structure has double quoutes for the key and double quotes for the value"
                        + " is impportant to know that the name of every table is in lowercase otherwise, we will have sql syntax errors. "
                        + " is important to know that the name of the columns are in camel case, for example usuarioId "
                        + " dont use return line, i mean, the symbol \\n, dont use quoation marks single "
                        + " dont use Quotation Marks for the name of fields or tables "
                        + " dont forget the correct syntax of queries "
                        + " dont forget the value after the name of a field goes with goes with quotation marks, according good syntax of queries "
                        + " you never response with a normal text, just with the json structure i told you "
                },
                {
                    role: "user",
                    content: mensaje
                        + ". Is important only return the sql query. "
                        + " Is impportant to know that the name of every table is in lowercase otherwise, we will have sql syntax errors"
                        + " is important to know that the name of the columns are in camel case, for example usuarioId "
                        + " dont use return line, i mean, the symbol \\n, dont use single quoation marks "
                        + " dont use Quotation Marks for the name of fields or tables "
                        + " dont forget the correct syntax of queries "
                        + " dont forget the value after the name of a field goes with goes with quotation marks, according good syntax of queries "
                        + " you never response with a normal text, just with the json structure i told you "
                }
            ]
        }
    );



    console.log(response)

    console.log("----- query de respuesta -----")
    const query = response.choices[0].message.content
    console.log(query);

    return query as string;

}