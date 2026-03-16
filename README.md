# 📱 App Store Web Application

## 📖 Project Overview

This is a modern **App Store web application** where users can explore trending applications, view detailed information, install apps, and manage their installations. The application provides a smooth and interactive experience with features like **live search, sorting, charts, installation management, and responsive design**.

Users can browse apps, check ratings, downloads, and reviews, and visualize app review statistics through interactive charts. Installed apps are stored in **localStorage**, allowing users to manage their installed applications even after refreshing the page.

---

## 🚀 Key Features

### 🏠 Home Page

- Attractive banner with call-to-action buttons for **App Store** and **Play Store**
- Statistics section with app insights
- **Top Apps** section displaying the most popular applications
- “Show All” button to navigate to all available apps

### 📱 All Apps Page

- Displays all apps from JSON data
- **Live search functionality** (case-insensitive)
- Shows **total number of apps**
- Displays a **No App Found** message when no result matches
- Each app card links to its **App Details page**

### 📊 App Details Page

- Displays app information (image, rating, downloads, reviews)
- **Install button with toast notification**
- Button becomes **disabled after installation**
- **Responsive review chart** using Recharts
- Detailed description section

### 📥 My Installation Page

- Shows all installed apps
- Data stored using **localStorage**
- **Uninstall button** removes the app from both UI and localStorage
- Toast notification for uninstall action
- **Sorting feature by download count (High → Low / Low → High)**

### ⚠️ Additional Features

- Custom **404 Error Page** for invalid routes
- **Loading animation** during navigation and search operations
- Responsive UI based on the provided design

---

## 🛠 Technologies Used

### Frontend

- **React 19**
- **React Router** (Routing & navigation)
- **Tailwind CSS**
- **DaisyUI**
- **React Icons**

### Data Visualization

- **Recharts** for review charts

### State & Storage

- **React Hooks**
- **LocalStorage**

### Notifications

- **React Toastify**

### Development Tools

- **Vite**
- **ESLint**

---

## 📦 Main Dependencies

- React
- React Router
- Tailwind CSS
- DaisyUI
- React Icons
- Recharts
- React Toastify

---

## 🎯 Purpose

This project demonstrates modern **React application development**, including **routing, state management, localStorage handling, data visualization, and responsive UI design**.

It is designed as a **portfolio-level project** showcasing practical frontend development skills.
