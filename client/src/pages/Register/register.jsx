import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Register.css";
import api from "../../services/api";




function Register () {


    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        country: ""
    })


    const handleChange = (e) => {
        
        setFormData({
            ...formData,

            [e.target.name]: e.target.value


        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post(
                "/users/register",
                formData
            )

            alert(response.data.message);
            navigate("/welcome");

        } catch (error) {

            alert(error.response?.data?.message || "Registration failed.")
        }
    }




    return (
        <div className="register-page">
                <div className="register-card">
                    
                    <h1>Face-time 🌎</h1>
                    
                    <form onSubmit={handleSubmit}>
                        <label>FullName: </label>
                        <input 
                            type="text"
                            name="fullname"
                            value={formData.fullname}
                            onChange={handleChange}
                        />
                        <label>Email: </label>
                        <input 
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            />

                        <label>Country: </label>
                        <input 
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            />

                        <button type="submit">Enter</button>
                    </form>
                </div>
        </div>
    )
}

export default Register
