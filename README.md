# 🌦️ Weather Forecast App (Full Stack)

A full-stack weather forecasting app built with **React (JavaScript + Vite)** on the frontend and **Node.js + Express + MongoDB** on the backend. The backend acts as a proxy to the [openweathermap.org](https://openweathermap.org) API and also logs city view activity in a MongoDB database.

> 🔗 **Hosted on AWS**  
> 🖥️ Frontend: [http://13.60.15.250](http://13.60.15.250)  
> ⚙️ Backend: [http://13.60.15.250:8000/api/search/top](http://13.60.15.250:8000/api/search/top)

## 🌟 Features

- **Real-time Weather Data:** Access long-term weather forecasts by city.
- **City Search:** Find cities with a responsive search bar.
- **Top Viewed Cities:** Tracks and displays the most frequently searched cities.
- **User Logging:** Logs user activity (selected cities) to MongoDB.
- **Responsive UI:** Works seamlessly on mobile and desktop.
- **Proxy Backend:** Bypasses CORS issues when accessing external APIs.

---

## 🚀 Technologies Used

### 🔧 Backend

- **Node.js**
- **Express**
- **MongoDB + Mongoose**
- **dotenv** for environment config
- **Hosted on AWS**

### 🖥️ Frontend

- **React + JavaScript**
- **Vite** (build tool)
- **AXIOS** for data fetching and caching
- **SCSS** for styling
- **Hosted on AWS**

---

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Clone the repository:

```bash
git clone https://github.com/Urnesto/ibm-weather-app.git
cd ibm-weather-app
```

2. Install backend dependencies:

```bash
cd backend
npm install
```

3. Install frontend dependencies:

```bash
cd frontend
npm install
```

## Usage

### Running the Application Locally

1. Start the backend server:

```bash
cd backend
npm start
```

2. In a separate terminal, start the frontend:

```bash
cd frontend
npm run dev
```

3. Open your browser and navigate to: `http://localhost:5173`

### Author

Made by Valdemaras Sinkevicius

