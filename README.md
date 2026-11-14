# 🚀 Contentify CMS — Modern Vue.js Single Page Application

A sleek, responsive, and scalable Single Page Application (SPA) built with **Vue 3** and **Bootstrap 5**, engineered to seamlessly consume a RESTful API for full content management and secure user authentication.

🔗 **Live Demo:** [https://vercel.app](https://vercel.app)  
⚙️ **Backend Repository:** [taskMangment-backend](https://github.com)

---

## ✨ Key Features

- **🔐 Secure Authentication Flow:** Complete user registration, login, and session persistence powered by token-based authentication.
- **📝 Full CRUD Operations:** Create, read, update, and delete posts effortlessly with instant UI reactivity and real-time feedback.
- **🛡️ Protected Routes & Guards:** Client-side route protection using Vue Router navigation guards to secure private views and admin dashboards.
- **📱 Responsive & Clean UI:** Crafted with **Bootstrap 5** grid system for a seamless experience across mobile, tablet, and desktop devices.
- **🏗️ Modular Folder Architecture:** Organized into clean, decoupled layers (`views`, `components`, `router`, `shared`) following **Clean Code** principles for maximum maintainability and scalability.

---

## 🛠️ Tech Stack

- **Framework:** Vue.js 3 (Composition / Options API)
- **Routing:** Vue Router
- **Styling:** Bootstrap 5 & Custom CSS
- **Build Tool:** Vite
- **Deployment:** Vercel (CI/CD integrated with GitHub)

---

## 📂 Project Architecture

```text
src/
├── assets/          # Static assets & global styles
├── components/      # Reusable UI components
├── router/          # Route definitions & navigation guards
├── shared/          # Centralized API configurations & services
└── view/            # Page-level views (Auth, Posts, Admin Dashboard)
```

---

## 🚀 Getting Started Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com
   cd Contentify-CMS-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure API Endpoint:**
   Update `src/shared/ApiConfig.js` to point to your local or production API URL.

4. **Run the development server:**
   ```bash
   npm run dev
   ```

---

## 👨‍💻 Author

**Ahmed Badwy**  
- GitHub: [@ahmedbadwy-dev](https://github.com)
