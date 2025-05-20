# Next.js E-commerce Template 🛍️

A modern, accessible e-commerce platform built with Next.js 14 (frontend) and Express + PostgreSQL (backend), designed for both customers and store administrators.
<br/>Includes a dynamic storefront, full admin dashboard, backend API, image upload, order tracking, and internationalization support.

---
## 🌐 Live Preview

This project was originally built with a focus on **Hebrew (RTL)** support.  
Some design elements may appear more refined in RTL; improvements to LTR layout are ongoing.

**🌍 RTL (Hebrew):** [modern-ecommerce-store.vercel.app/he](https://modern-ecommerce-store.vercel.app/he)  
**🌐 LTR (English):** [modern-ecommerce-store.vercel.app/en](https://modern-ecommerce-store.vercel.app/en)  
**🔐 Admin Panel:** [modern-ecommerce-store.vercel.app/admin](https://modern-ecommerce-store.vercel.app/admin) — includes a built-in login form


---

## ▲ Deploy Your Own

Deploy your own version of this e-commerce template with Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/giladfuchs/next-ecommerce)

---


## 🚀 Getting Started

You’ll find full install instructions inside each folder:

- [📦 `/frontend/README.md`](./frontend/README.md)
- [🛠️ `/backend/README.md`](./backend/README.md)

---

## 🤝 Contributing

Contributions are welcome!  
If you find this project useful, consider giving it a ⭐ on GitHub — it helps others discover it!

To contribute, fork the repository and submit a pull request with your enhancements or bug fixes.

---

## ✨ Key Features

### 🧑‍💻 Frontend (`/frontend`)
- 💅 Hybrid styling with **MUI + Tailwind CSS**
- 🛍️ Dynamic storefront with product filtering and category browsing
- ⚡ **Local cache** for categories and products (via client memory)
- 🧾 **Admin dashboard** with full model management (products, categories, orders, images)
- 🧠 SEO & Open Graph via **Next.js 14 Metadata API**
- 🌍 RTL + i18n with **react-intl**
- ♿ **Accessibility bar** with font scaling and contrast settings
- 🛒 **Cart powered by Redux** with **persisted state**
- 🧪 **Playwright-based E2E tests** for key storefront and admin flows

### 🔌 Backend (`/backend`)
- 🔄 RESTful CRUD API for products, categories, orders, and images
- 🔐 Token-based authentication using **JWT**
- 🗃️ **TypeORM + PostgreSQL** schema design
- 📤 Image upload via **Vercel Blob** + processing with **Multer + Sharp**
- ✉️ Optional: email and WhatsApp order notifications via **SendGrid + CallMeBot**
- ✅ **100% test coverage** for API routes using **Vitest + Supertest**

---

## 🧩 Tech Stack

### Frontend
- **Next.js 14**, **React 18**, **TypeScript**
- **MUI 7**, **Tailwind CSS**
- **Redux Toolkit** with **redux-persist**
- **AG Grid**, **Formik**, **Yup**, **react-intl**, **Sonner**
- **Playwright** for E2E testing

### Backend
- **Express.js** + **TypeScript**
- **TypeORM** with **PostgreSQL**
- **JWT** + **bcryptjs** for authentication
- **Multer** + **Sharp** for image upload & processing
- **Vercel Blob** for cloud storage
- **Nodemailer**, **SendGrid**, **CallMeBot** for notifications
- **Vitest** + **Supertest** for full API test coverage


---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
