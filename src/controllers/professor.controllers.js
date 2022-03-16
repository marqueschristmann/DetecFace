const Professor = require("../models/professor.model");

module.exports = {
  /// rota do inicio ou index
  async index(req, res) {
    const user = await Professor.find();
    res.json(user);
  },
  /// rota de cadastro do Professor
  async create(req, res) {
    const {
      nome_PRusuario,
      email_PRusuario,
      tipo_PRusuario,
      senha_PRusuario,
      foto_PRusuario,
    } = req.body;
    let data = {};
    let user = await Professor.findOne({ email_PRusuario });

    if (!user) {
      data = {
        nome_PRusuario,
        email_PRusuario,
        tipo_PRusuario,
        senha_PRusuario,
        foto_PRusuario,
      };

      user = await Professsor.create(data);
      return res.status(200).json(user);
    } else {
      return res.status(500).json(user);
    }
  },

  /// rota de listagem do Professor
  async details(req, res) {
    const { _id } = req.params;
    const user = await Professor.findOne({ _id });
    res.json(user);
  },

  ///rota deatualizar Professor
  async update(req, res) {
    const {
      _id,
      nome_PRusuario,
      email_PRusuario,
      senha_PRusuario,
      tipo_PRusuario,
      foto_PRusuario,
    } = req.body;
    const data = {
      nome_PRusuario,
      email_PRusuario,
      senha_PRusuario,
      tipo_PRusuario,
      foto_PRusuario,
    };
    const user = await Professor.findOneAndUpdate({ _id }, data, { new: true });
    res.json(user);
  },
  /// rota de deletar Professor
  async delete(req, res) {
    const { _id } = req.params;
    const user = await Professor.findByIdAndDelete({ _id });
    return res.json(user);
  },
};
