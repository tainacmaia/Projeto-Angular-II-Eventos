const loginRepository = require("../repositories/login.repository");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class LoginController {
  async login(req, res) {
    const {
      username,
      password
    } = req.body;
    // const salt = await bcrypt.genSalt(15)
    const user = await loginRepository.findByUsername(username);
    // const newHashedPassword = await bcrypt.hash(user.password, salt)

    if (!user) {
      return res.status(404).json({
        message: "Usuário não encontrado!"
      });
    }

    if (!await bcrypt.compare(password, user.password)) {
      return res.status(401).json({
        message: "Senha incorreta!"
      });
    }

    const token = jwt.sign({
        userId: user.id,
        username
      },
      process.env.TOKEN_KEY, {
        expiresIn: "2h",
      }
    );

    return res.status(200).json({
      user: {
        ...user.dataValues,
        password: null
      },
      token
    });
  }
}

module.exports = new LoginController();