const { Router } = require('express');
const eventsRouter = require('./modules/events/routes/events.routes');

const router = Router();

router.use('/events', eventsRouter)

module.exports = router;