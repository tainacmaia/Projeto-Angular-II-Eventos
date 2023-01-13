const database = require("../../../infra/db");
const Event = require("../models/event.model");

class EventsRepository {
  async findAll() {
    await database.sync();
    const events = await Event.findAll();
    return events;
  }

  async findOne(id) {
    await database.sync();
    const event = await Event.findOne({
      where: {
        id
      }
    });
    return event;
  }

  async create(eventP) {
    try {
      await database.sync();

      const {
        ...event
      } = eventP;

    } catch (error) {
      console.log('Error stack:', error);
    }
  }

  async update(id, eventP) {
    try {
      await database.sync();

      const {
        address,
        contact,
        ...event
      } = eventP;
    } catch (error) {
      console.log('Error stack:', error);
    }
  }

  async delete(id) {
    try {
      await database.sync();

      await Event.destroy({
        where: {
          id
        }
      });
    } catch (error) {
      console.log('Error stack:', error);
    }
  }
}

module.exports = new EventsRepository();