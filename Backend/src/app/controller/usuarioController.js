import Usuario from '../models/usuario';

class UsuarioController {
  async store(req, res) {
    const { nome, email, senha, admin } = req.body;
    const usuario = await Usuario.create({
      nome,
      email,
      senha,
      admin,
    });
    res.json(usuario);
  }

  async get(req, res, next) {
    Usuario.findAll().then((company) => {
      res.json(company);
    });
  }

  async getID(req, res) {
    const { id } = req.body;
    const usuario = await Usuario.findByPk(id);
    if (usuario === null) {
      res.json('Not found!');
    } else {
      res.json(usuario); // true
      // Its primary key is 123
    }
  }

  // async getNome(req, res) {
  //   const { nome } = req.body;
  //   const usuario = await Usuario.findAll().filter(nome);
  //   if (usuario === null) {
  //     res.json('Not found!');
  //   } else {
  //     res.json(usuario); // true
  //     // Its primary key is 123
  //   }
  // }
}

export default new UsuarioController();
