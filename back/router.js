const { Router } = require('express');
const eventsRouter = require('./modules/events/routes/events.routes');
const reservationsRouter = require('./modules/reservations/routes/reservations.routes');
const loginRouter = require("./modules/users/routes/login.routes");
const usersRouter = require("./modules/users/routes/users.routes");

const router = Router();

router.use('/events', eventsRouter)
router.use('/reservations', reservationsRouter)
router.use("/users", usersRouter);
router.use("/login", loginRouter);

module.exports = router;