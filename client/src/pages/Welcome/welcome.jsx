import { useNavigate } from "react-router-dom"
import "./Welcome.css"
import socket from "../../services/socket"





function Welcome () {

    const navigate = useNavigate()

    const handleStart = () => {
    
        socket.connect()

        navigate("/videoChat")
    }




    return (
        <div className="welcome-page">
            <div className="welcome-card">
                <h1>Ready to Meet New Friends?</h1>
            
                <p>
                    Click below and we'll connect you with someone
                    from anywhere in the world.
                </p>

                <button onClick={handleStart}>
                    Start Finding Friends
                </button>
            </div>
        </div>
    )
}

export default Welcome
