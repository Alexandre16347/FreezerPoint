import { Router } from 'express';
import UC from './app/controller/usuarioController';
import LC from './app/controller/livroController';
import SC from './app/controller/SessionController';
import autenticacao from './app/middleware/autenticacao';
const routes = new Router();

// routes.get('/', (req, res) => res.json({ mensage: 'Raiz funcionando' }));

routes.get('/busca', UC.get);
routes.get('/buscaID', UC.getID);
// routes.get('/getLivro', LC.get);

// routes.get('/buscaNome', UC.getNome);
routes.post('/login', SC.store);
routes.post('/createUsuario', UC.store);
routes.post('/createAdmin', UC.store);
routes.post('/createLivro', LC.store);
routes.use(autenticacao);
routes.put('/update', UC.update);

export default routes;
