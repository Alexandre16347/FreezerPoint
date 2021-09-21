// import { uuid } from 'uuidv4';
// import livros from '../../database/livros';
import Livro from '../models/livro';

class livroController {
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
}

export default livroController;
