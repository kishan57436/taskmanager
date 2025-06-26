// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const path = require("path");
// const connectDB = require("./config/db");

// const authRoutes = require("./routes/authRoutes")
// const userRoutes = require("./routes/userRoutes")
// const taskRoutes = require("./routes/taskRoutes")
// const reportRoutes = require("./routes/reportRoutes")

// const app = express();

// // Middleware to handle CORS
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL || "*",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     allowedHeaders: ["Content-Type", "Authorization"],
//   })
// );

// // Connect Database
// connectDB();

// // Middleware

// // i will make this code good basically 
// app.use(express.json());

// // Routes
// app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
// app.use("/api/tasks", taskRoutes);
// app.use("/api/reports", reportRoutes);

// // Serve uploads folder
// app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// // Start Server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

// Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const reportRoutes = require("./routes/reportRoutes");

const app = express();

// ✅ Allowed frontend origin (your Vercel frontend domain)
const allowedOrigins = [
  process.env.CLIENT_URL || 'https://taskmanager-bice-omega.vercel.app',
];

// ✅ CORS Middleware
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// ✅ Handle preflight OPTIONS requests
app.options("*", cors());

// 🔌 Connect Database
connectDB();

// 🧠 Middleware
app.use(express.json());

// 📦 Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/reports", reportRoutes);

// 📂 Serve static uploads
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// 🚀 Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
