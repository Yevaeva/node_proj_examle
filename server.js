const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

app.listen(process.env.PORT || 8000, () => {
  console.log(`App running on port ${process.env.PORT}...`);
});
