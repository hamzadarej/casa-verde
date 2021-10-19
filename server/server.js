require("dotenv").config();
const http = require("http");
const app = require("./app");
console.log(process.env.PORT);
const PORT = process.env.PORT || 5005;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
