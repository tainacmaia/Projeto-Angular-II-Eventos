const { Router } = require('express');
const reservationsController = require('../controllers/reservations.controller');

const reservationsRouter = Router();

reservationsRouter.get('/', reservationsController.findAll);
reservationsRouter.get('/:id', reservationsController.findById);
reservationsRouter.post('/', reservationsController.create);
reservationsRouter.put('/:id', reservationsController.update);
reservationsRouter.delete('/:id', reservationsController.delete);

module.exports = reservationsRouter;