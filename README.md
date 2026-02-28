<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>WeatherAndTime - MERN Project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
   
</head>

<body>

<header>
    <h1>🌦️ WeatherAndTime</h1>
    <p>MERN Stack Weather Application using Weather API</p>
</header>

<section>
    <h2>🚀 Project Overview</h2>
    <p>
        <span class="highlight">WeatherAndTime</span> is a full-stack web application built with the MERN stack 
        (MongoDB, Express.js, React.js, Node.js).  
        It allows users to search for any city and get real-time weather data and local time information.
    </p>
</section>

<section>
    <h2>🛠️ Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong> React.js, Tailwind CSS, Axios</li>
        <li><strong>Backend:</strong> Node.js, Express.js</li>
        <li><strong>Database:</strong> MongoDB</li>
        <li><strong>External API:</strong> WeatherAPI.com</li>
    </ul>
</section>

<section>
    <h2>🌐 Features</h2>
    <ul>
        <li>Search weather by city name</li>
        <li>Display temperature, humidity, wind speed</li>
        <li>Show weather condition with icon</li>
        <li>Automatic local time detection</li>
        <li>Store search history in MongoDB</li>
        <li>Responsive design</li>
    </ul>
</section>

<section>
    <h2>⚙️ Environment Variables</h2>
    <p><strong>Server (.env)</strong></p>
    <code>
        PORT=5000<br>
        MONGO_URI=your_mongodb_connection_string<br>
        WEATHER_API_KEY=your_weather_api_key
    </code>

    <p style="margin-top:15px;"><strong>Client (.env)</strong></p>
    <code>
        VITE_API_URL=http://localhost:5000
    </code>
</section>

<section>
    <h2>📡 Example API Endpoint</h2>
    <code>GET /api/weather/:city</code>
</section>

<section>
    <h2>🔐 Security</h2>
    <ul>
        <li>API keys stored in environment variables</li>
        <li>Input validation</li>
        <li>Sensitive data protected</li>
    </ul>
</section>

<section>
    <h2>📈 Future Improvements</h2>
    <ul>
        <li>User authentication</li>
        <li>Dark mode</li>
        <li>Deployment (Vercel + Render)</li>
        <li>Personalized dashboard</li>
    </ul>
</section>

<footer>
    <p>Developed by Aziz Ben Othmen | MERN Stack Developer</p>
</footer>

</body>
</html>
