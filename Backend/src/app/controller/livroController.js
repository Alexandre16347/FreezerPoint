import Livro from '../models/livro';

class LivroController {
  async store(req, res) {
    const { nome, autor, edicao, sinopse, genero, categoria } = req.body;
    const livro = await Livro.create({
      nome,
      autor,
      edicao,
      sinopse,
      genero,
      categoria,
    });
    res.json(livro);
  }

  // async get(req, res, next) {
  //   Livro.findAll().then((company) => {
  //     res.json(company);
  //   });
  // }
}

export default new LivroController();
