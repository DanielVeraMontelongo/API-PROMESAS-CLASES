import { connect } from "../../database.js";

class UsersController {
    static getStart(req, res) {
      // Lógica para manejar la ruta '/'
    }
  
    static async getUser(req, res) {
      let sql = 'SELECT * FROM usuario;'

      const conection = await connect();
      const [rows] = await conection.execute(sql)
      res.send(rows)


      // connect()
      // .then((conection)=> conection.execute(sql))
      // .then(([rows])=>{
      //   res.send(rows)
      // })
      // .catch(err=>console.log(err));
   
    }
  
    static getUserParams(req, res) {
      // Lógica para manejar la ruta '/usuario/:name'
    }
  
    static async postUser(req, res) {
      const sql = `INSERT INTO usuario 
      (nombre,apellido) 
      VALUES (?, ?);`

      const {nombre,apellido} = req.body
      const params = [nombre,apellido]
      
      const conection = await connect();
      const result = await conection.execute(sql,params)
      res.send(result);
    }
  
    static putUser(req, res) {
      // Lógica para manejar la ruta PUT '/usuario'
    }
  
    static deleteUser(req, res) {
      // Lógica para manejar la ruta DELETE '/usuario'
    }
  }
  
  export default UsersController;