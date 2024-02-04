const app = require("./app");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

dotenv.config({path : "backend/config/config.env" });

connectDB();



setTimeout(() => {
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  }, 5000);
  