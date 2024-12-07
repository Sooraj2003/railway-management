const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.registerUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, password: hashedPassword, role });
    res.status(201).send('User registered');
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    if (!user || !(await bcrypt.compare(password, user.password)))
      return res.status(401).send('Invalid credentials');
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET);
    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
