import { Router } from 'express';
import UC from './backend/app/controller/usuarioController';

const routes = new Router();

routes.get('/', (req, res) => res.json({ mensage: 'Raiz funcionando' }));

routes.get('/busca', UC.get);
routes.get('/buscaID', UC.getID);
// routes.get('/buscaNome', UC.getNome);

routes.post('/createUsuario', UC.store);
routes.post('/createAdmin', UC.store);

export default routes;
