const db = require("../config/db")

const registerUser = async (req, res) => {

    try {
        
        const {fullname, email, country} = req.body;

        if (!fullname || !email || !country) {
            return res.status(400).json({
                success: false,
                message: "Please fill all fields."
            })
        }

        const sql = "INSERT INTO users(fullname,email,country) VALUES(?,?,?)"

        await db.execute(sql, [
            fullname,
            email,
            country
        ])

        res.status(201).json({
            success: true,
            message: "User registered successfully."
        })

    } catch (error) {
        
        console.log(error)

        res.status(500).json({
            success: false,
            message: "Server Error"
        })
    }
}

module.exports = {
    registerUser
}