const express = require('express');
const routes = express.Router();

const usuario = require('./controllers/usuario');
const tarefa = require('./controllers/tarefa');

routes.get('/', (req, res) => {
  return res.json({ titulo: 'to do list' });
});

routes.post('/usuarios',usuario.create);
routes.get('/usuarios',usuario.read);
routes.patch('/usuarios/:id',usuario.update);
routes.delete('/usuarios/:id',usuario.remove);

routes.post('/tarefas',tarefa.create);
routes.get('/tarefas',tarefa.read);
routes.patch('/tarefas/:id',tarefa.update);
routes.delete('/tarefas/:id',tarefa.remove);

module.exports = routes;