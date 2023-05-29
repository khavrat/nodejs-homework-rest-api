const mongoose = require("mongoose");

const app = require("./app");

// const DB_HOST =
//   "mongodb+srv://Inna:xGQRxuqKairreIPT@cluster0.psuvyyv.mongodb.net/db-contacts?retryWrites=true&w=majority";

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
