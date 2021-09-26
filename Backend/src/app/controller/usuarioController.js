import Usuario from '../models/usuario';

class UsuarioController {
  async store(req, res) {
    const { nome, email, senha, admin } = await Usuario.create(req.body);
    console.log({ nome, email, senha, admin });
    return res.json({ nome, email, senha, admin });
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
