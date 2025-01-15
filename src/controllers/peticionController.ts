import { Request, Response } from 'express';
import { peticion } from '../services/peticionService';
import { AppDataSource } from '../data-source';
import { normalizarQuery } from '../utils/normalizarQuery';

export class PeticionController {
  async peticionController(req: Request, res: Response) {
    const prompt: string = req.query.prompt as string;
    const response = await peticion(prompt);

    const jsonResponse = JSON.parse(response)

    try {
      // Execute the query and get the result
      if (jsonResponse.sql) {

        const queryResult = await AppDataSource.query(normalizarQuery(jsonResponse.sql));

        // Iterate over each row in the result
        queryResult.forEach((row) => {
          console.log("Row:", row);
          // Process each row as needed
        });

        // Alternatively, use map to transform rows if needed
        const transformedResult = queryResult.map((row) => ({
          ...row,
          processedField: row.someField ? row.someField.toUpperCase() : null,
        }));

        console.log("Transformed Result:", transformedResult);

        // Send the result back in the response
        res.json(queryResult); // Or res.json(transformedResult) if transformed

      }

      if (jsonResponse.error) {
        const jsonParse = JSON.parse(response);
        const responseArray = [jsonParse];
        res.json(responseArray);
      }

    } catch (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ message: "Error executing query", error });
    }
  }
}
