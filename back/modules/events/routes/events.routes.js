const { Router } = require('express');
const eventsController = require('../controllers/events.controller');
const verifyToken = require("../../../middlewares/verify-token");

const eventsRouter = Router();

eventsRouter.get('/', eventsController.findAll);
eventsRouter.get('/:id',verifyToken, eventsController.findById);
eventsRouter.post('/',verifyToken, eventsController.create);
eventsRouter.put('/:id',verifyToken, eventsController.update);
eventsRouter.delete('/:id',verifyToken, eventsController.delete);

module.exports = eventsRouter;
