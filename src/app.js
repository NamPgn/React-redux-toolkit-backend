import express from "express"
import "dotenv/config"
import cors from "cors"
import mongoose from "mongoose";
import routerAuth from "./routes/auth";
import routerProducts from "./routes/products"
import path from "path";
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT;
app.use("/api", routerAuth);
app.use("/api", routerProducts);
app.use(express.static(path.resolve('./public')));
try {
    mongoose.connect("mongodb://localhost:27017/React-toolkit-js");
    console.log("Kết nôt mongodb thành công")
} catch (error) {
    console.log("Kết nôt mongodb thất bại")
}
app.listen(port, () => {
    console.log(`Server is running on: http://localhost:${port}`);
});
