const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const port = 8001;

app.use(cors());

app.use(express.json());

// fetch the data
app.get("/users", async (req, res) => {
  try {
    const { rows } = await pool.query("SELECT * FROM userinfo");
    res.json(rows);
  } catch (error) {
    console.error(error.message);
  }
});

// fetch by id
app.get("/users/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const { rows } = await pool.query(
      "SELECT * FROM userinfo WHERE user_id=$1",
      [id]
    );
    res.json(rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// create user
app.post("/users", async (req, res) => {
  try {
    const user = req.body;
    console.log(user);
    const {rows} = await pool.query(
      "INSERT INTO userinfo(first_name,last_name, email) VALUES($1, $2, $3) RETURNING *",
      [user.first_name, user.last_name, user.email]
      );
    res.status(201).json(rows[0]);
    res.json(newUser);
  } catch (error) {
    console.error(error.message);
  }
});

// delete user
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteUser = await pool.query(
      "DELETE FROM userinfo WHERE user_id = $1",
      [id]

    );
    res.json("feild deleted")
  } catch (error) {
    console.error(error.message);
  }
});

// update user
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  try {
    console.log(id)
    const updateUser = await pool.query(
      "UPDATE userinfo SET first_name= $1 ,last_name= $2 ,email=$3 WHERE user_id=$4",
      [user.first_name, user.last_name, user.email, id]
    );
    res.json('todo workded')

  } catch (error) {
    console.error(error.message);
  }
});

app.listen(8001, () => {
  console.log("listening on port 8001");
});
