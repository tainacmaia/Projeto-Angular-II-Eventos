const { Router } = require('express');
const reservationsController = require('../controllers/reservations.controller');
const verifyToken = require("../../../middlewares/verify-token");

const reservationsRouter = Router();

reservationsRouter.get('/', verifyToken, reservationsController.findAll);
reservationsRouter.get('/:id', verifyToken, reservationsController.findById);
reservationsRouter.post('/', reservationsController.create);
reservationsRouter.put('/:id', verifyToken, reservationsController.update);
reservationsRouter.delete('/:id', verifyToken, reservationsController.delete);

module.exports = reservationsRouter;