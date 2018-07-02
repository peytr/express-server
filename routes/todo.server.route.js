import express from 'express';

import * as todoController from '../controllers/todo.server.controller';

const router = express.Router();

router.route('/')
    .get(todoController.getTodos)
    .post(todoController.addTodos)
    .put(todoController.updateTodos);

router.route('/:id')
    .get(todoController.getTodos)
    .delete(todoController.deleteTodos);

export default router;




