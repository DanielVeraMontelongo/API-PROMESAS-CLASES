import { connect } from "../../database.js";

class UsersController {

    static async getUser(req, res) {
      let sql = 'SELECT * FROM usuarios;'

      if(req.query.usuario_id){
        sql=  `SELECT * FROM usuarios WHERE usuario_id = ${req.query.usuario_id};`
      }

      try {
        const conection = await connect();
        const [rows] = await conection.execute(sql)
        res.send(rows);
      } catch (error) {
        res.send(error);
      }


      // connect()
      // .then(conection=> conection.execute(sql))
      // .then(([rows])=>{
      //   res.send(rows)
      // })
      // .catch(err=>console.log(err));
   
    }
  
    static async getUserParams(req, res) {
      // Lógica para manejar la ruta '/usuario/:name'

      let sql = `SELECT * FROM usuarios WHERE usuario_id = ${req.params.usuario_id};`

      try {
        const conection = await connect();
        const [rows] = await conection.execute(sql)
        res.send(rows);
      } catch (error) {
        res.send(error);
      }
    }
  
    static async postUser(req, res) {
      const sql = `INSERT INTO usuarios 
        (nombre,apellidos) 
        VALUES (?, ?);`

      const {nombre,apellidos} = req.body
      const params = [nombre,apellidos]
      
      try {
        const conection = await connect();
        const result = await conection.execute(sql,params)
        res.send(result);
      } catch (error) {
        res.send(err);
      }
    }
  
    static async putUser(req, res) {
      const sql = `UPDATE usuarios 
        SET nombre = COALESCE(?,nombre), 
        apellidos = COALESCE(?,apellidos) 
        WHERE usuario_id = ?;`

      const {nombre,apellidos, usuario_id} = req.body

      const params = [
        nombre?     nombre:     null,
        apellidos?  apellidos:  null,
        usuario_id
      ]
      
      try {
        const conection = await connect();
        const result = await conection.execute(sql,params)
        res.send(result);
      } catch (error) {
        res.send(err);
      }
    }
  
    static async deleteUser(req, res) {

      let sql = 'DELETE FROM usuarios WHERE usuario_id = ?;'

      const {usuario_id} = req.body

      const params = [usuario_id]
      
      try {
        const conection = await connect();
        const result = await conection.execute(sql,params)
        res.send(result);
      } catch (error) {
        res.send(err);
      }
    }
  }
  
  export default UsersController;