const { Router } = require('express');
const eventsController = require('../controllers/events.controller');

const eventsRouter = Router();

eventsRouter.get('/', eventsController.findAll);
eventsRouter.get('/:id', eventsController.findById);
eventsRouter.post('/', eventsController.create);
eventsRouter.put('/:id', eventsController.update);
eventsRouter.delete('/:id', eventsController.delete);

module.exports = eventsRouter;
