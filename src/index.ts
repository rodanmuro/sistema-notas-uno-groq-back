import { AppDataSource } from "./data-source"
import { Usuario } from "./entity/Usuario";
import { router } from "./routes/peticionRoutes";
import { peticion } from "./services/peticionService";
import * as express from "express";
import * as cors from 'cors';

const app = express();
const Cors = cors();
const PORT = 3000;

app.use(Cors);
app.use(router);


async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    // Start your Express app here
    app.listen(PORT, () => {
      console.log('Server is running on port '+PORT);
    });
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
}

startServer();



