const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const authRouter = require('./routes/auth/auth-routes');
const adminProductsRouter = require('./routes/admin/products-routes');
const adminOrderRouter = require('./routes/admin/order-routes');
const commonFeatureRouter = require('./routes/common/feature-routes');
const shopProductsRouter = require('./routes/shop/products-routes');
const shopCartRouter = require('./routes/shop/cart-routes');
const shopAddressRouter = require('./routes/shop/address-routes');
const shopOrderRouter = require('./routes/shop/order-routes');
const shopSearchRouter = require('./routes/shop/search-routes');
const shopReviewRouter = require('./routes/shop/review-routes');

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ CORRECT CORS SETUP
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://e-commerce-mern-frontend-pjqj.onrender.com",
  ],
  methods: ["GET", "POST", "DELETE", "PUT", "OPTIONS"],
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // For preflight

// ✅ Middleware
app.use(cookieParser());
app.use(express.json());

// ✅ Routes
app.use('/api/auth', authRouter);
app.use('/api/admin/products', adminProductsRouter);
app.use('/api/admin/orders', adminOrderRouter);
app.use('/api/shop/products', shopProductsRouter);
app.use('/api/shop/cart', shopCartRouter);
app.use('/api/shop/address', shopAddressRouter);
app.use('/api/shop/order', shopOrderRouter);
app.use("/api/shop/search", shopSearchRouter);
app.use("/api/shop/review", shopReviewRouter);
app.use("/api/common/feature", commonFeatureRouter);

// ✅ Test route
app.get("/", (req, res) => {
  res.send("Server is up and CORS is working!");
});

// ✅ DB + Server
mongoose.connect('mongodb+srv://anjalivaishnav2000:e9OrEu7knWdLmYbk@cluster0.8slvoaf.mongodb.net/')
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  })
  .catch((error) => console.log(error));

























// const express = require('express')
// const mongoose = require('mongoose'); 
// const  authRouter = require('./routes/auth/auth-routes')
// const cookieParser = require('cookie-parser')
// const cors = require('cors')
// const adminProductsRouter = require('./routes/admin/products-routes')
// const adminOrderRouter = require('./routes/admin/order-routes')
// const commonFeatureRouter = require('./routes/common/feature-routes')
// const shopProductsRouter = require('./routes/shop/products-routes')
// const shopCartRouter = require('./routes/shop/cart-routes')
// const shopAddressRouter = require('./routes/shop/address-routes')
// const shopOrderRouter = require('./routes/shop/order-routes')
// const shopSearchRouter = require("./routes/shop/search-routes");
// const shopReviewRouter = require("./routes/shop/review-routes");


// mongoose.connect('mongodb+srv://anjalivaishnav2000:e9OrEu7knWdLmYbk@cluster0.8slvoaf.mongodb.net/').then(()=>console.log('mongoDB connected')).catch((error)=>console.log(error));
// const app = express()
// const PORT = process.env.PORT || 5000;
// app.use(
//   cors({
//    origin: [
//   "http://localhost:5173", // local dev
//   "https://e-commerce-mern-frontend-pjqj.onrender.com", // deployed frontend
// ],

//     methods: ["GET", "POST", "DELETE", "PUT"],
//     allowedHeaders: [
//       "Content-Type",
//       "Authorization",
//       "Cache-Control",
//       "Expires",
//       "Pragma",
//     ],
//     credentials: true,
//   })
// );
// app.options("*", cors()); 
// app.use(cookieParser());
// app.use(express.json());
// app.use('/api/auth', authRouter);
// app.use('/api/admin/products', adminProductsRouter)
// app.use('/api/admin/orders', adminOrderRouter)
// app.use('/api/shop/products',shopProductsRouter)
// app.use('/api/shop/cart',shopCartRouter)
// app.use('/api/shop/address',shopAddressRouter)
// app.use('/api/shop/order',shopOrderRouter)
// app.use("/api/shop/search", shopSearchRouter);
// app.use("/api/shop/review", shopReviewRouter);
// app.use("/api/common/feature", commonFeatureRouter);

// app.listen(PORT,()=>console.log(`Server Is Running At PORT ${PORT}`));
