const { Train, Booking } = require('../models');
const sequelize = require('../models').sequelize;

exports.getSeatAvailability = async (req, res) => {
  try {
    const { source, destination } = req.query;
    const trains = await Train.findAll({
      where: { source, destination }
    });
    res.status(200).send(trains);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.bookSeat = async (req, res) => {
  const { trainId } = req.body;
  const userId = req.user.id;

  try {
    const train = await sequelize.transaction(async (t) => {
      const train = await Train.findByPk(trainId, { lock: t.LOCK.UPDATE, transaction: t });
      if (train.availableSeats <= 0) throw new Error('No seats available');
      train.availableSeats -= 1;
      await train.save({ transaction: t });
      await Booking.create({ userId, trainId }, { transaction: t });
      return train;
    });
    res.status(200).send(`Seat booked successfully in train ${train.name}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
