# Ahmed Badwy — Project Portfolio

A practical collection of learning projects across frontend development, backend APIs, and native PHP. The goal is to show how I build user-facing features, connect them to data, and keep improving through real debugging—not to pretend every project is production-ready.

> **A little developer humor:** powered by Vue, PHP, coffee, and the eternal hope that the API is running on the first try.

## Portfolio at a glance

| Project | Main technologies | What it demonstrates |
|---|---|---|
| [Contentify CMS Frontend](https://github.com/ahmedbadwy-dev/Contentify-CMS-frontend) | Vue 3, JavaScript, Vite | SPA structure, authentication UI, post CRUD, API integration |
| [Task Management Backend](https://github.com/ahmedbadwy-dev/taskMangment-backend) | Laravel 10, PHP, Sanctum | REST-style endpoints, authentication, validation, post management |
| [Multi-role E-commerce](https://github.com/ahmedbadwy-dev/multi-role-ecommerce-native-php) | Native PHP, PDO, MySQL | Role/permission checks, product and user management, prepared queries |
| [Contentify CMS](https://github.com/ahmedbadwy-dev/Contentify-CMS) | Laravel 10, PHP, Sanctum | Laravel backend foundation for a CMS; see the project notes below |
| [JS Product Toggle Viewer](https://github.com/ahmedbadwy-dev/js-product-toggle-viewer) | HTML, CSS, JavaScript, Vue (global build) | Product browsing, filtering, cart interactions, browser storage |
| [Hospital System](https://github.com/ahmedbadwy-dev/hospital-system) | Not confirmed | Repository is listed, but its source was not available for review when this portfolio was written |

---

## 1. Contentify CMS Frontend

**Repository:** [ahmedbadwy-dev/Contentify-CMS-frontend](https://github.com/ahmedbadwy-dev/Contentify-CMS-frontend)

A Vue single-page application for interacting with a content-management API. It is the most directly relevant project in this portfolio for a frontend internship because it brings together views, routing, form handling, client-side state, and asynchronous API requests.

### What it includes

- Login and registration screens with client-side field validation.
- An admin area for listing, creating, editing, and deleting posts.
- Search and paginated post listing.
- Image selection/preview and image-upload UI.
- Bearer-token headers for authenticated API calls.
- Route-level authentication checks.
- Loading and toast/alert feedback for user actions.

### Main tools

Vue 3, Vue Router, Pinia, Vite, Bootstrap, Zod, SweetAlert2, and Vue Toastification. The API base URL is configured in `src/shared/ApiConfig.js`; configure it for the environment where the application is being run.

### What I learned

This project helped me practice separating page components from API actions, managing shared edit state, validating user input, and handling loading and error states. It also taught me that a successful API response is only half the job—the UI has to guide the user clearly too.

**A small Egyptian-style dev joke:** when the spinner keeps spinning, it is either a slow request or the backend taking a tea break. Check the Network tab before blaming Vue.

---

## 2. Task Management Backend

**Repository:** [ahmedbadwy-dev/taskMangment-backend](https://github.com/ahmedbadwy-dev/taskMangment-backend)

A Laravel API project. The inspected source includes authentication endpoints and post-management code, so the current implementation should be described by those concrete features rather than by the repository name alone.

### What it includes

- Laravel API routing and controller-based request handling.
- Registration, login, logout, and authenticated-user checks using Laravel Sanctum tokens.
- Post listing with search and pagination.
- Post creation, updating, deletion, and image upload handling.
- Dedicated request-validation and API-resource classes are used by the post controller.
- Eloquent models and database migrations for application data.

### Main tools

PHP, Laravel 10, Laravel Sanctum, Eloquent, Form Requests, API Resources, and PHPUnit configuration.

### What I learned

This project gave me practice designing API endpoints, validating incoming data on the server, protecting authenticated routes, and returning structured responses to a frontend. It pairs naturally with a frontend client that consumes the API.

---

## 3. Multi-role E-commerce in Native PHP

**Repository:** [ahmedbadwy-dev/multi-role-ecommerce-native-php](https://github.com/ahmedbadwy-dev/multi-role-ecommerce-native-php)

A PHP/MySQL e-commerce application built without a full-stack framework. Its code is organized into controllers, model classes, helpers, and views, and includes separate admin workflows for products, users, and images.

### What it includes

- Login and registration flows with session-based user state.
- Role and permission data used to control administrative actions.
- Product and user management workflows, including add, update, and delete operations.
- Product/category and user/role data access through PDO model classes.
- Prepared SQL statements for database operations.
- Product image upload and file-management helpers.
- Password verification with PHP's `password_verify` in the login flow.

### Main tools

Native PHP, PDO, SQL, sessions, HTML, and CSS.

### What I learned

Building this without a framework helped me understand the responsibilities that frameworks usually handle: request routing, validation, persistence, sessions, and access checks. It also made me appreciate why input validation and safe file handling deserve careful attention.

---

## 4. Contentify CMS Backend

**Repository:** [ahmedbadwy-dev/Contentify-CMS](https://github.com/ahmedbadwy-dev/Contentify-CMS)

A Laravel 10 project whose repository description presents it as a CMS/ERP foundation. The source reviewed for this portfolio confirms the Laravel application structure and Sanctum dependency, but the inspected API routes still look close to the default Laravel starter setup. I am keeping this description conservative rather than claiming features that are not clearly visible in the reviewed code.

### What it demonstrates

- Familiarity with Laravel's standard application layout.
- PHP dependency management with Composer.
- A starting point for building authenticated API functionality with Sanctum.

### Portfolio note

Before presenting this as a completed CMS, document the implemented features and make sure the API routes, controllers, setup guide, and screenshots demonstrate them clearly. A good README is part of the project—not just decoration.

---

## 5. JS Product Toggle Viewer

**Repository:** [ahmedbadwy-dev/js-product-toggle-viewer](https://github.com/ahmedbadwy-dev/js-product-toggle-viewer)

A small browser-based product browsing and shopping-cart demo. The repository description calls it a Vanilla JavaScript project, but the inspected `index.js` uses `Vue.createApp` and the page loads Vue from a local script. For accuracy, this portfolio describes the implementation as HTML/CSS/JavaScript with Vue's global build.

### What it includes

- A product grid with a text-search filter.
- Product description toggling and stock counts.
- Add-to-cart, reduce-quantity, and remove-from-cart interactions.
- A calculated cart total.
- Browser `localStorage` persistence for cart/product state.
- A purchase confirmation state.

### What I learned

This project was useful for practicing reactive UI updates, array operations, computed values, and browser storage in a compact app. It is a small demo, not a payment system—no real money or checkout service is involved.

---

## 6. Hospital System

**Repository:** [ahmedbadwy-dev/hospital-system](https://github.com/ahmedbadwy-dev/hospital-system)

This repository is listed on my GitHub profile, but its source files were not available to inspect when this portfolio document was prepared. I have intentionally not invented a feature list. Once the source and setup instructions are available, this section should be updated with the real stack, modules, and a verified demo.

---

## How I present these projects

- For a **frontend internship**, lead with **Contentify CMS Frontend** and use **JS Product Toggle Viewer** as a smaller supporting demo.
- For a **backend or PHP internship**, lead with **Task Management Backend** or **Multi-role E-commerce**, depending on the role.
- Include screenshots or a live demo where possible, and add exact setup instructions to each repository.
- Be ready to explain what I built, what trade-offs I made, what I tested, and what I would improve next.
- I describe projects honestly as learning/personal projects and do not claim production readiness without deployment, tests, and operational evidence.

> **One last bit of humor:** a README that says “just run it” is not documentation. Tell the next developer which command, which environment variables, and which backend—save them from archaeological debugging.
