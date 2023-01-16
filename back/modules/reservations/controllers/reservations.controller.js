const reservationsRepositories = require("../repositories/reservations.repositories");

class ReservationsController {
  async findAll(req, res) {
    const reservations = await reservationsRepositories.findAll();
    if (!reservations) {
      return res.status(404).json();
    }
    return res.status(200).json(reservations);
  }

  async findById(req, res) {
    const { id } = req.params;
    const reservation = await reservationsRepositories.findOne(id);
    return res.json(reservation);
  }

  async create(req, res) {
    const reservation = req.body;
    console.log(reservation);
    reservationsRepositories.create(reservation);
    return res.json();
  }

  async update(req, res) {
    const reservation = req.body;
    const { id } = req.params;
    reservationsRepositories.update(id, reservation);
    return res.json();
  }

  async delete(req, res) {
    const { id } = req.params;
    reservationsRepositories.delete(id);
    return res.json();
  }
}

module.exports = new ReservationsController();