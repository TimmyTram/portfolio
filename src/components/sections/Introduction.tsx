const Introduction = () => {
    return (
        <div className='container'>
            <div className="headshot-container">
                <img className='headshot' src="/portfolio/headshot.jpg" alt="headshot" />
            </div>

            <div className="flex-col-container">
                <div className="introduction">
                    <h1>👋 Hello, my name is Timmy Tram</h1>
                </div>

                <div className="description">
                    <p>
                        I am an aspiring Full Stack Developer and enjoy building web applications from top to bottom.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Introduction;