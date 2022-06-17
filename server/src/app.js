import express from "express";
import morgan from "morgan";
import cors from "cors";
import empleadosRoutes from "./routes/empleados.routes";
import departamentosRoutes from "./routes/departamentos.routes"

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/empleados', empleadosRoutes);
app.use ('/departamentos', departamentosRoutes);
export default app;

