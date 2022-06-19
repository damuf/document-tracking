import express from "express";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import empleadosRoutes from "./routes/empleados.routes";
import departamentosRoutes from "./routes/departamentos.routes"
import empresasRoutes from "./routes/empresas.routes";
import gerenciasRoutes from "./routes/gerencias.routes";
import parametrosRoutes from "./routes/parametros.routes";
import tramitesRoutes from "./routes/tramites.routes";

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/',(req, res)=>{
    res.send("vienvenido al server")
})

app.use('/auth', authRoutes);
app.use('/empleados', empleadosRoutes);
app.use ('/departamentos', departamentosRoutes);
app.use ('/empresas', empresasRoutes);
app.use('/gerencias', gerenciasRoutes);
app.use('/parametros', parametrosRoutes);
app.use('/tramites', tramitesRoutes);

export default app;