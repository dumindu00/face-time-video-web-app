import "./Register.css";

function Register () {
    return (
        <div className="register-page">
                <div className="register-card">
                    
                    <h1>Face-time 🌎</h1>
                    
                    <form action="">
                        <label>Enter FullName: </label>
                        <input type="text" placeholder="John smith" />
                        <label>Enter Email: </label>
                        <input type="text" placeholder="johnsmith@gmail.com"/>
                        <label>Contact Number: </label>
                        <input type="text" placeholder="235-678-999"/>
                        <label>Country: </label>
                        <input type="text" placeholder="United Kingdom"/>
                        <button type="submit">Enter</button>
                    </form>
                </div>
        </div>
    )
}

export default Register
