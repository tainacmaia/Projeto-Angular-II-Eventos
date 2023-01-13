const eventsRepositories = require("../repositories/events.repositories");

class EventsController {
  async findAll(req, res) {
    const events = await eventsRepositories.findAll();
    if (!events) {
      return res.status(404).json();
    }
    return res.status(200).json(events);
  }

  async findById(req, res) {
    const { id } = req.params;
    const event = await eventsRepositories.findOne(id);
    return res.json(event);
  }

  async create(req, res) {
    const event = req.body;
    eventsRepositories.create(event);
    return res.json();
  }

  async update(req, res) {
    const event = req.body;
    const { id } = req.params;
    eventsRepositories.update(id, event);
    return res.json();
  }

  async delete(req, res) {
    const { id } = req.params;
    eventsRepositories.delete(id);
    return res.json();
  }
}

module.exports = new EventsController();