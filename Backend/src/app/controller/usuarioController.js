import Usuario from '../models/usuario';

class UsuarioController {
  async store(req, res) {
    //Verifica se o usuário existe na base de dados antes de salvar
    const userExists = await Usuario.findOne({
      where: { email: req.body.email },
    });

    if (userExists) {
      return res.status(400).json({ mensagem: 'Usuario já existe' });
    }

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

  //atualiza usuario
  async update(req, res) {
    const { novoNome } = req.body;

    const usuario = await Usuario.findByPk(req.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não existe' });
    }

    const { id, nome, email } = await usuario.update({ nome: novoNome });

    res.json({ id, nome, email });
  }

  //verificar o bug de não conseguir acessar depois de trocar a senha
  async updateSenha(req, res) {
    const { senhaAntiga, senhaNova } = req.body;

    const usuario = await Usuario.findByPk(req.id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não existe' });
    }

    if (!usuario.checkSenha(senhaAntiga)) {
      return res.status(404).json({ erro: 'Senha inválida' });
    }

    const { id, nome, email } = await usuario.update({ senha: senhaNova });

    res.json({ id, nome, email });
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
