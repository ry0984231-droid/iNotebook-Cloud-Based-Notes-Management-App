# 📒 iNotebook – Your Notes, Your Space

iNotebook is a full-stack web application that allows users to securely create, manage, update, and delete their personal notes anytime, anywhere.

## 🚀 Features

* 🔐 **User Authentication** – Secure user registration and login.
* 📝 **Create Notes** – Add new notes with titles, descriptions, and tags.
* ✏️ **Update Notes** – Edit your notes whenever needed.
* 🗑️ **Delete Notes** – Remove notes you no longer need.
* 🔒 **Secure Access** – Users can access their own notes.
* 📱 **Responsive Design** – Works across different screen sizes.

## 🛠️ Technologies Used

**Frontend:**

* React.js
* Bootstrap
* HTML5
* CSS3
* JavaScript

**Backend:**

* Node.js
* Express.js
* MongoDB
* REST API

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Directory

```bash
cd iNotebook
```

### 3. Install Dependencies

Install the backend dependencies:

```bash
npm install
```

If your frontend is in a separate folder, navigate to that folder and install its dependencies as well.

### 4. Configure Environment Variables

Create a `.env` file in your backend directory and add the required environment variables, such as your MongoDB connection string and authentication secret.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

**Note:** Never upload your actual database credentials or secret keys to GitHub.

### 5. Start the Application

Run the backend server:

```bash
npm start
```

If the frontend is separate, start it using the appropriate command from its directory.

## 📂 Project Structure

```text
iNotebook/
├── backend/
│   ├── models/
│   ├── routes/
│   └── index.js
├── src/
│   ├── components/
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
```
*Note: Adjust the folder structure according to your actual project.*

## 🎯 Purpose

The main goal of iNotebook is to provide a simple and convenient platform for managing personal notes securely and efficiently.

## 👨‍💻 Author

**Your Name**

GitHub: Add your GitHub profile link here.



⭐ If you like this project, consider giving it a star!
