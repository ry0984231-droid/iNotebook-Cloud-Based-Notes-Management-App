# 📒 iNotebook – Notes Management Application

iNotebook is a full-stack web application that allows users to create, update, delete, and manage their personal notes securely.

## 🚀 Features

* 🔐 User Authentication
* 📝 Create and save notes
* ✏️ Update existing notes
* 🗑️ Delete notes
* 🔒 Secure access to personal notes
* 📱 Responsive user interface

## 🛠️ Technologies Used

**Frontend:**

* React.js
* JavaScript
* HTML
* CSS
* Bootstrap

**Backend:**

* Node.js
* Express.js
* MongoDB
* REST API

## 📂 Project Structure

```text
iNotebook/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── index.js
│   └── package.json
│
├── inotebooks/
│   ├── public/
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── README.md
```

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Setup Backend

```bash
cd backend
npm install
npm start
```

### 3. Setup Frontend

Open a new terminal and run:

```bash
cd inotebooks
npm install
npm start
```

*Note: Use the commands configured in your `package.json` files. If your frontend uses Vite, the development command is usually `npm run dev`.*

## 🔑 Environment Variables

Configure the required environment variables in your backend `.env` file.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

**Important:** Never commit your actual secrets or database credentials to GitHub.

## 👨‍💻 Author

Your Name

⭐ If you like this project, don't forget to star the repository!
