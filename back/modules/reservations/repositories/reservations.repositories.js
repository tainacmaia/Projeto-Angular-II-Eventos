const database = require("../../../infra/db");
const Reservation = require("../models/reservations.model");

class ReservationsRepository {
  async findAll() {
    await database.sync();
    const reservations = await Reservation.findAll();
    return reservations;
  }

  async findOne(id) {
    await database.sync();
    const reservation = await Reservation.findOne({
      where: {
        id
      }
    });
    return reservation;
  }

  async create(reservation) {
    try {
      await database.sync();
      const createdReservation = await Reservation.create(reservation);
      return createdReservation;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, reservation) {
    try {
      await database.sync();
      const updatedReservation = await Reservation.update(
        reservation, {
          where: {
            id
          }
        }
      );
      return updatedReservation;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      await database.sync();

      await Reservation.destroy({
        where: {
          id
        }
      });
    } catch (error) {
      console.log('Error stack:', error);
    }
  }
}

module.exports = new ReservationsRepository();