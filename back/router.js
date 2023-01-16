const { Router } = require('express');
const eventsRouter = require('./modules/events/routes/events.routes');
const reservationsRouter = require('./modules/reservations/routes/reservations.routes');

const router = Router();

router.use('/events', eventsRouter)
router.use('/reservations', reservationsRouter)

module.exports = router;