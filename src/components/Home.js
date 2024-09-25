import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <section className="hero">
                <div className="overlay"></div>
                <h1>Welcome to HomeAwake</h1>
                <p>Smart Solutions for a Smarter Home</p>
                <button>Get Started</button>
            </section>
            <section className="features">
                <h2>Our Services</h2>
                <div className="feature-list">
                    <div className="feature">
                        <img src="light.jpg" alt="Smart Lighting" />
                        <h3>Smart Lighting</h3>
                        <p>Automate your home's lighting with smart bulbs and switches. Control brightness, color, and schedules from your smartphone or voice assistant.</p>
                    </div>
                    <div className="feature">
                        <img src="camera.jpg" alt="Home Security" />
                        <h3>Home Security</h3>
                        <p>Keep your home safe with our advanced security systems. Includes smart cameras, motion sensors, and remote monitoring.</p>
                    </div>
                    <div className="feature">
                        <img src="thermostat.jpg" alt="Climate Control" />
                        <h3>Climate Control</h3>
                        <p>Optimize your home's temperature with smart thermostats. Save energy and stay comfortable with automated climate control.</p>
                    </div>
                    <div className="feature">
                        <img src="alexa.jpg" alt="Voice Control Integration" />
                        <h3>Voice Control Integration</h3>
                        <p>Integrate your home automation with voice assistants like Alexa, Google Assistant, and Siri for hands-free control.</p>
                    </div>
                    <div className="feature">
                        <img src="motion.jpg" alt="Smart Appliances" />
                        <h3>Smart Appliances</h3>
                        <p>Upgrade your kitchen and laundry with smart appliances. Control and monitor your devices from anywhere.</p>
                    </div>
                </div>
            </section>
            <section className="about">
                <h2>About Us</h2>
                <p>Short paragraph about your business and its mission.</p>
            </section>
            <section className="contact">
                <h2>Get in Touch</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </section>
        </div>
    );
}

export default Home;
