import Sequelize, { Model } from 'sequelize';

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        email: Sequelize.STRING,
        senha: Sequelize.STRING,
        // id: Sequelize.INTEGER,
        admin: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      },
    );
  }
}

export default Usuario;

/*
Cliente (Usuário):
Cadastro de Clientes;
    Nome;
    Imagem de Perfil;
    ID;
    E-mail;
    Senha;
    Admin = False;
Atualizar Dados Cadastrais;
Pesquisa de Clientes (Pesquisa de vendedores);
Excluir a conta;
*/
