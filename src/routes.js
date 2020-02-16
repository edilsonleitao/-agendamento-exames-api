const {Router} = require('express');
const ExameController = require('./controllers/ExameController');
const ClienteController = require('./controllers/ClienteController');

const routes = Router();

routes.get('/exame', ExameController.index);
routes.get('/exame/:id', ExameController.show);
routes.post('/exame', ExameController.store);
routes.put('/exame/:id', ExameController.update);
routes.delete('/exame/:id', ExameController.destroy);

routes.get('/cliente', ClienteController.index);
routes.get('/clienteNome', ClienteController.show);
routes.post('/cliente', ClienteController.store);
routes.put('/cliente/:id', ClienteController.update);
routes.delete('/cliente/:id', ClienteController.destroy);

module.exports = routes;