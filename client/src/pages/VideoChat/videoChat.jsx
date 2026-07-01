import "./VideoChat.css";


function VideoChat() {
    return (
        <div className="video-page">

            <header className="top-bar">
                <h1>🌍 Face-Time</h1>
                <p>Connected to Stranger</p>
            </header>

            <main className="video-container">

                <div className="remote-video">
                    Stranger Camera
                </div>
            </main>

                <div className="status">
                    Searching.....
                </div>

                <div className="controls">
                    <button className="next-btn">
                        Next
                    </button>

                    <button className="quit-btn">
                        Quit
                    </button>
                </div>

        </div>
    )
}

export default VideoChat;