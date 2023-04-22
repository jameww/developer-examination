const express = require("express");
const cors = require("cors");
const app = express();
require("./configs/database")

//Init midleware
app.use(cors());

//Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.use("/item_data", require("./routes/products"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
