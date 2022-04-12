const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const pool = require("./db")
const bcrypt = require('bcryptjs/dist/bcrypt')

//middleware
app.use(cors())
app.use(express.json())

//logger middleware
app.use(morgan('combined'))

app.listen(5000, () => {
  console.log("server has started on port 5000")
})

//ROUTES
app.get('/', (req, res) => res.json({ msg: "Welcom to the azam api"}))
//create a user 
app.post("/create_user", async (req, res) => {
  try {

    let { username, password } = req.body

    const salt = await bcrypt.genSalt(10)

    password = await bcrypt.hash(password, salt)

    const user = await pool.query(
      "INSERT INTO azam (azam_user, azam_pass) VALUES($1,$2) RETURNING *",
      [username,password]
    )

    res.json(user.rows[0])

  } catch (error) {
    console.log(error.message)
  }
})


//login a user

app.post("/login", async (req, res) => {
  console.log(req.body)

  const { username, password } = req.body

  try {
    const user = await pool.query(`SELECT * FROM azam WHERE azam_user = '${username}'`)
    console.log(user)
    
    if(user.rowCount === 0) {
      return res.status(400).json({ msg: 'User does not exist'})
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].azam_pass)

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials'})
    }

    const users = await pool.query("SELECT * FROM azam ORDER BY azam_id DESC")

    res.status(200).json(users.rows)
  } catch (err) {
    console.error(err.message)    
  }
})

//login a user

app.post("/users", async (req, res) => {

  const { username, password } = req.body

  try {
    const user = await pool.query(`SELECT * FROM azam WHERE azam_user = '${username}'`)
    console.log(user)
    if(user.rowCount === 0) {
      return res.status(400).json({ msg: 'User does not exist'})
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].azam_pass)

    if (!isMatch) {
      return res.status(400).json({ msg: 'Invalid Credentials'})
    }

    const users = await pool.query("SELECT * FROM azam ORDER BY azam_id DESC")

    res.status(200).json(users.rows)
  } catch (err) {
    console.error(err.message)    
  }
})










