# 🌟 PopX React Application

A **pixel-perfect React.js application** based on an **Adobe XD design**, featuring smooth navigation between screens using **React Router DOM** and **React Hooks**.

---

## 🚀 Live Demo

[View Live App](https://educase-india-landing-screen.netlify.app/)

---

## 📌 Features

- Responsive & pixel-perfect UI from Adobe XD

- Smooth page transitions with React Router

- Form inputs with custom styled fields

- Modular folder structure

- Easy to extend and scale

---

## 🛠️ Tech Stack

- **React.js** (Functional Components)
- **React Router DOM** (Routing)
- **React Hooks** (`useState`, `useEffect`, `useNavigate`)
- **CSS3** (Responsive & pixel-perfect styling)
- **Adobe XD** (UI/UX Design source)

---

## 📁 Project Structure 

```
popx-landing/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx
│   │   ├── Signup.jsx
│   │   ├── Login.jsx
│   │   └── Profile.jsx
│   │
│   ├── styles/
│   │   ├── LandingPage.css
│   │   ├── Signup.css
│   │   ├── Login.css
│   │   └── Profile.css
│   │
│   ├── App.js
│   └── index.js
│
├── package.json
└── README.md
```
---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/popx-landing.git
cd popx-landing

# Install dependencies
npm install

# Start development server
npm start

# App will run
http://localhost:3000
```

---

## 🔗 Page Navigation Flow

### 🏠 Landing Page (`/`)
- First screen user sees.
- Click **"Create Account"** → navigates to `/signup`.

### 🔐 Signup Page (`/signup`)
- User can register.
- Click **"Already Registered? Login"** → navigates to `/login`.
- On **successful signup**, user is redirected to `/profile`.

### 🔓 Login Page (`/login`)
- Users can log in with their credentials.
- On **successful login**, user is redirected to `/profile`.

### 👤 Profile Page (`/profile`)
- Static design displaying **Account Settings** and **User Info**.
- For design showcase only (not dynamic yet).

---
### 📦 Dependencies

```
"dependencies": {
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-hook-form": "^7.57.0",
    "react-router-dom": "^7.6.2",
}
```

---

## 📄 License

This project is licensed under the MIT License.
