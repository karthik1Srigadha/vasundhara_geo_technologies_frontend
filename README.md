# 🚀 React Mini Projects Dashboard

A collection of interactive React mini-applications built to demonstrate core React concepts, clean UI design, and real-world functionality.  
This project is designed as a **practice + portfolio showcase**.

---

## 🌐 Live Demo
👉 https://vasundhara-geo-technologies-fronten.vercel.app/

---

## 📌 Features

- 📋 **Todo Application**
  - Add, delete, and mark tasks as complete
  - Priority based tasks (Low / Medium / High)
  - LocalStorage persistence
  - Filter tasks (All / Active / Completed)

- 🧾 **User Form**
  - Controlled inputs
  - Form validation
  - Password show/hide toggle
  - Displays submitted data

- 📊 **Multi Progress Bar**
  - Dynamic progress bars
  - Average progress calculation
  - Color changes based on progress level

- 🔍 **Live Search**
  - Real-time filtering
  - Highlighted search matches

- ⏱ **Countdown Timer**
  - Start / Pause / Resume / Reset
  - Persistent timer using LocalStorage

---

## 🛠 Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS + Custom CSS
- **Routing:** React Router DOM
- **State Management:** React Hooks
- **Storage:** LocalStorage
- **Deployment:** Vercel

---

## 📂 Project Structure

```txt
src/
│── components/
│   ├── Todo/
│   ├── UserForm/
│   ├── ProgressBar/
│   ├── Search/
│   └── Timer/
│
│── hooks/
│   └── useLocalStorage.js
│
│── pages/
│   └── Home.jsx
│
│── App.jsx
│── main.jsx
│── index.css
