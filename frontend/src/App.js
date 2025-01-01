import React from 'react';
import ChatBox from './components/ChatBox';

const App = () => (
    <div
        style={{
            display: 'flex',
            height: '100vh',
            backgroundColor: 'rgba(205, 255, 125, 0.14)',
        }}
    >
        {/* Left Panel */}
        <div
            style={{
                width: '25%', // Daha geniş sol panel
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(255, 182, 193, 0.9)', // Hafif saydam pembe
                    borderRadius: '15px',
                    padding: '20px', // Daha geniş içerik
                    boxShadow: '2px 2px 8px rgba(0,0,0,0.2)', // Daha belirgin gölge
                    fontFamily: "'Times New Roman', Times, serif", // Yazı tipi
                }}
            >
                <h3>General Health Tips</h3>
                <ul>
                    <li>Drink at least 2 liters of water daily.</li>
                    <br />
                    <li>Get 7-8 hours of sleep every night.</li>
                    <br />
                    <li>Exercise for 30 minutes every day.</li>
                    <br />
                    <li>Eat a balanced diet rich in fruits and vegetables.</li>
                    <br />
                    <li>Avoid smoking and excessive alcohol consumption.</li>
                    <br />
                    <li>Take regular breaks while working to avoid burnout.</li>
                    <br />
                    <li>Wash your hands frequently to prevent infections.</li>
                    <br />
                    <li>Get regular health check-ups.</li>
                    <br />
                    <li>Practice mindfulness or meditation for mental health.</li>
                    <br />
                    <li>Stay socially connected to maintain emotional well-being.</li>
                    <br />
                    <li>Wear sunscreen to protect your skin from UV damage.</li>
                    <br />
                    <li>Stay physically active to boost overall health.</li>
                </ul>
            </div>
        </div>

        {/* Center Content */}
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: '30px', // Biraz daha yukarı çekmek için
            }}
        >
            <img
                src='/logo.jpg'
                alt='Logo'
                style={{
                    width: '200px', // Logoyu büyüt
                    height: '200px', // Logoyu büyüt
                    borderRadius: '20px', // Tam yuvarlak yerine köşeleri yuvarlatılmış kare
                    marginBottom: '20px',
                    boxShadow: '2px 2px 10px rgba(0,0,0,0.2)', // Hafif gölge
                }}
            />
            <ChatBox />
        </div>

        {/* Right Panel */}
        <div
            style={{
                width: '25%', // Daha geniş sağ panel
                padding: '15px',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
            }}
        >
            <div
                style={{
                    backgroundColor: 'rgba(173, 216, 230, 0.9)', // Hafif saydam mavi
                    borderRadius: '15px',
                    padding: '20px', // Daha geniş içerik
                    boxShadow: '2px 2px 8px rgba(0,0,0,0.2)', // Daha belirgin gölge
                    fontFamily: "'Times New Roman', Times, serif", // Yazı tipi
                }}
            >
                <h3>Quick Tips</h3>
                <p>Keep your questions short and specific for better results.</p>
                <p>Provide as much relevant information as possible.</p>
            </div>

            <div
                style={{
                    backgroundColor: 'rgba(144, 238, 144, 0.9)', // Hafif saydam yeşil
                    borderRadius: '15px',
                    padding: '20px', // Daha geniş içerik
                    boxShadow: '2px 2px 8px rgba(0,0,0,0.2)', // Daha belirgin gölge
                    fontFamily: "'Times New Roman', Times, serif", // Yazı tipi
                }}
            >
                <h3>Recommended Questions</h3>
                <ul>
                    <li>My patient has a cough and fever. What could be the cause?</li>
                    <br />
                    <li>My patient is experiencing back pain. What treatments are recommended?</li>
                    <br />
                    <li>My patient is having difficulty sleeping. What might help them?</li>
                    <br />
                    <li>My patient has a persistent headache. What could be the reason?</li>
                    <br />
                    <li>My patient has skin rashes. Could it be an allergic reaction?</li>
                    <br />
                    <li>My patient feels fatigued all the time. What could be causing this?</li>
                    <br />
                    <li>My patient has chest discomfort. Should they get a cardiac checkup?</li>
                </ul>
            </div>
        </div>
    </div>
);

export default App;
