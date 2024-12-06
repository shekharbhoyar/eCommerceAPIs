import express from "express";
import { registerApi } from "./user/registerApi.js";
import { config } from "dotenv";
import { getUsersApi } from "./user/getUsersApi.js";
import { updateUserApis } from "./user/updateUser.js";
import { getProductApi } from "./products/getProductsApi.js";
import { insertpApi } from "./products/insertProductApi.js";
import { authorisation } from "./middleware/auth.js";
import { generateToken } from "./token/generateToken.js";

config();
const app = express();

app.use(express.json());
app.use("/", registerApi);
app.use("/", generateToken);
app.use("/", authorisation, getUsersApi);
app.use("/", authorisation, updateUserApis);
app.use("/", authorisation, getProductApi);
app.use("/", authorisation, insertpApi);
app.listen(3000, () => {
  console.log("server is running.......");
});
