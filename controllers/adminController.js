const { Train } = require('../models');

exports.addTrain = async (req, res) => {
  try {
    const { name, source, destination, totalSeats } = req.body;
    const train = await Train.create({
      name,
      source,
      destination,
      totalSeats,
      availableSeats: totalSeats
    });
    res.status(201).send(train);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
