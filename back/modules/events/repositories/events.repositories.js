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

  async create(event) {
    try {
      await database.sync();
      const createdEvent = await Event.create(event);
      return createdEvent;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, event) {
    try {
      await database.sync();
      const updatedEvent = await Event.update(
        event, {
          where: {
            id
          }
        }
      );
      return updatedEvent;
    } catch (error) {
      console.log(error);
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