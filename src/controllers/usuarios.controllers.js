const Usuario = require("../models/usuario.model");

module.exports = {
  /// rota do inicio ou index
  async index(req, res) {
    const user = await Usuario.find();
    res.json(user);
  },
  /// rota de cadastro do usuario
  async create(req, res) {
    const {
      nome_usuario,
      email_usuario,
      tipo_usuario,
      senha_usuario,
      foto_usuario,
    } = req.body;
    let data = {};
    let user = await Usuario.findOne({ email_usuario });

    if (!user) {
      data = {
        nome_usuario,
        email_usuario,
        tipo_usuario,
        senha_usuario,
        foto_usuario,
      };

      user = await Usuario.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },

  /// rota de listagem do usuario
  async details(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findOne({ _id });
    res.json(user);
  },

  ///rota deatualizar usuario
  async update(req, res) {
    const {
      _id,
      nome_usuario,
      email_usuario,
      senha_usuario,
      tipo_usuario,
      foto_usuario,
    } = req.body;
    const data = {
      nome_usuario,
      email_usuario,
      senha_usuario,
      tipo_usuario,
      foto_usuario,
    };
    const user = await Usuario.findOneAndUpdate({ _id }, data, { new: true });
    res.json(user);
  },
  /// rota de deletar usuario
  async delete(req, res) {
    const { _id } = req.params;
    const user = await Usuario.findByIdAndDelete({ _id });
    return res.json(user);
  },
};
