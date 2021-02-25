import express, { response } from 'express';
import 'reflect-metadata';
import "./database";
import { router } from './routes';

const app = express();

app.use(express.json());

app.use( router );

app.listen(3333,() => console.log('Server is Running!'));



/** 
/**
 * GET => Buscar
 * POST => Salvar
 * PUT => Alterar
 * DELETE => Deletar
 * PATCH => Alteração especifica
 /

    // http://localhost:3333/users

    app.get("/", (request, response) => {
        return response.json({ message: "Hello World - NLW04"})
    });
    
    // 1 parametro => Rota(Recurso API) 
    // 2 parametro => request, response
    
    app.post("/", (request, response) => {
        //Recebeu os dados para salvar
        return response.json({ message: "Os dados foram salvos com sucesso!" })
    });   
 */