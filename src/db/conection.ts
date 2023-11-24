import { Sequelize} from 'sequelize'

const sequelize = new Sequelize('almacen', 'root', 'Contra.01', {
    host: 'localhost',
    dialect: 'mysql'
  });
  export default sequelize;