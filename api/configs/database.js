const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://api_recruit:As4TapTe768DOS68@recruitment.mos8yva.mongodb.net/developer_exam",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connection successfully!"))
  .catch((err) => console.error(err));