
# 🌦️ Node.js Weather App

A simple **Weather App** built using **Node.js**, **Express.js**, and **EJS** templates.  
This project fetches weather data from **OpenWeatherMap API** and detects user location via **OpenStreetMap (Nominatim Reverse Geocoding API)**.

---

## 🗺️ **Live Demo**

[Live App](https://node-weather-actg.onrender.com/)

---

## 📁 **Project Structure**

```
project/
├── public/                # Frontend static files (CSS, JS)
│   └── css/styles.css
│   └── js/app.js          # Browser geolocation & form handler
├── src/
│   └── app.js             # Backend (Express.js server)
├── templates/             # EJS views
│   └── partials/header.ejs
│   └── views/index.ejs
│   └── views/404.ejs
├── utils/
│   └── weatherData.js     # Fetches weather data using OpenWeather API
├── .env                   # API keys (not pushed to GitHub)
├── .gitignore
├── package.json
```

---

## ⚙️ **Features**

- 🌍 **Auto Location Detection** using Geolocation + OpenStreetMap Nominatim API  
- 🌦️ **Weather Data Fetching** using OpenWeatherMap API  
- 🖥️ **EJS Templating** for rendering dynamic HTML  
- 🧰 **Express.js Backend** with custom API routing  
- 📱 **Responsive Frontend** with live updates  

---

## 🔑 **Environment Variables**

Create a `.env` file in the root:

```env
OPEN_WEATHER_BASE_URL=http://api.openweathermap.org/data/2.5/weather?q=
OPEN_WEATHER_SECRET_KEY=your_openweather_api_key_here
```

---

## 🛠️ **Installation & Running Locally**

1️⃣ **Clone the repo:**

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2️⃣ **Install dependencies:**

```bash
npm install
```

3️⃣ **Run the server:**

```bash
node src/app.js
```

4️⃣ **Open in browser:**

```
http://localhost:3000/
```

---

## 🌍 **APIs Used**

| API | Purpose |
|-----|---------|
| **OpenWeatherMap API** | Get weather data |
| **Nominatim API (OpenStreetMap)** | Reverse geocoding (lat/lon → city) |

---

## 🚀 **Deployment Notes**

### **Environment Variables in Production:**

- Set the following **Environment Variables** in Render/Vercel/Railway:

| Key | Value |
|-----|-------|
| `OPEN_WEATHER_BASE_URL` | `http://api.openweathermap.org/data/2.5/weather?q=` |
| `OPEN_WEATHER_SECRET_KEY` | `your OpenWeather API key` |

---

## 📄 **License**

This project is for learning purposes and open for use.

---

## 👨‍💻 **Author**

**Peddineni Bhaswanth**  
[LinkedIn](https://www.linkedin.com/in/peddineni-bhaswanth/)  
[GitHub](https://github.com/peddinenibhaswanth)
