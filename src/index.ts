import { AppDataSource } from "./data-source"
import { Usuario } from "./entity/Usuario";
import { router } from "./routes/peticionRoutes";
import { peticion } from "./services/peticionService";
import * as express from "express";

const app = express();

app.use(router);

async function startServer() {
  try {
    await AppDataSource.initialize();
    console.log('Data Source has been initialized!');

    // Start your Express app here
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error during Data Source initialization:', error);
  }
}

startServer();



