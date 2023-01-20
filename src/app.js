const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model.js");
const Users = require("./models/users.model");
const userRoutes = require("./routes/users.routes");
const todosRoutes = require("./routes/todos.routes");
const authRoutes = require("./routes/auth.routes")
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;

db.authenticate()
.then(()=>console.log("Autenticacion exitosa"))
.catch(err => console.log(err));

initModels();

db.sync({force: false})
.then(()=>console.log("DB sincronizada"))
.catch(err => console.log(err));

app.get("/", (req, res)=>{
    res.status(200).json({message: "Bienvenido al servidor"});
});

app.use("/api/v1", userRoutes);
app.use("/api/v1", todosRoutes);
app.use("/api/v1", authRoutes);


// app.get("/users/username/:username", async (req, res)=>{
//     try {
//         const {username} = req.params;
//         const result = await Users.findOne({where: {username}});
//         res.status(200).json(result);
//     } catch (error) {
//         console.log(error); 
//     }
// });

// app.post("/users", async (req, res) => {
//     try {
//         const user = req.body;
//         const result = await Users.create(user);
//         res.status(201).json(result);
//     } catch (error) {
        
//     }
// });

// app.put("/users/:id", async (req, res)=>{
//     try {
//         const {id} = req.params;
//         const field = req.body;
//         const result = await Users.update(field, {
//             where: {id}
//         });
//         res.status(200).json(result);
//     } catch (error){
//         res.status(400).json(error.message);
//     }
// });

// app.delete("/users/:id", async (req, res) => {
//     try {
//         const {id} = req.params;
//         const result = await Users.destroy({
//             where: {id}
//         });
//         res.status(200).json(result);
//     }catch (error) {
//         res.status(400).json(error.message);
//     }
// });

app.listen(PORT, () => {
    console.log("Servidor corriendo en el puerto 8000");
});