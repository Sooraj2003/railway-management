
# 🚆 Railway Management System

This is a **Railway Management System** built with **Node.js**, **Express**, and **PostgreSQL**. It allows users to check train availability, book seats, and manage bookings in real-time, handling concurrency and role-based access control.

## 📚 Features
- **User Authentication**: Register and login functionality with JWT-based authentication.
- **Role-Based Access**: Admins can add trains and update seat availability; users can book seats and view bookings.
- **Real-Time Booking**: Handles concurrency to ensure seat bookings are accurate.
- **Protected APIs**: Admin endpoints are secured with an API key.
- **Database**: PostgreSQL for reliable data storage.

## 🛠️ Tech Stack
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Sequelize ORM
- **Authentication**: JWT for user sessions, bcrypt for password hashing
- **Environment**: Docker-ready configuration (optional)

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/railway-management.git
cd railway-management
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
## No need of setting up ,I have pushed even the .env file into github, I know its bad ,but just for the ease.
```env


```

### 4. Set Up the Database
1. Make sure PostgreSQL is installed and running on your machine.
2. Create a database in PostgreSQL:
   ```sql
   CREATE DATABASE railway_management;
   ```
3. Run migrations to create tables:
   ```bash
   npx sequelize-cli db:migrate
   ```

### 5. Start the Server
```bash
node app.js
```

The server will run on `http://localhost:3000` by default.

## 📋 API Endpoints

### **Public Endpoints**
- **Register User**: `POST /auth/register`
- **Login User**: `POST /auth/login`

### **User Endpoints (Requires JWT)**
- **Get Train Availability**: `GET /trains`
- **Book a Seat**: `POST /bookings`
- **Get Booking Details**: `GET /bookings/:id`

### **Admin Endpoints (Requires API Key)**
- **Add New Train**: `POST /admin/trains`
- **Update Train Details**: `PUT /admin/trains/:id`

## 🔑 Example API Key Usage
Include the API key for admin endpoints in the request headers:
```http
x-api-key: your_admin_api_key
```

For user authentication, include the JWT token in the request headers:
```http
Authorization: Bearer your_jwt_token
```

## 📦 Scripts
- **Start Server**: `npm start`
- **Run Migrations**: `npx sequelize-cli db:migrate`
- **Undo Last Migration**: `npx sequelize-cli db:migrate:undo`
- **Seed Database**: `npx sequelize-cli db:seed:all`
- **Run Linter**: `npm run lint`

## 🧪 Testing
You can write tests using tools like **Jest** or **Mocha**. Example:
```bash
npm test
```

## 👨‍💻 Contributing
1. Fork the repository.
2. Create a new branch: `git checkout -b feature-name`.
3. Commit changes: `git commit -m "Added a new feature"`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

## 🐛 Troubleshooting
- Ensure PostgreSQL is running and accessible with the credentials in `.env`.
- If tables are not created, re-run migrations: `npx sequelize-cli db:migrate`.

## 📜 License
This project is licensed under the [MIT License](LICENSE).
