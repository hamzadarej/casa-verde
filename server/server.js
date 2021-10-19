require("dotenv").config();
const http = require("http");
const app = require("./app");
<<<<<<< HEAD

=======
console.log(process.env.PORT);
>>>>>>> 86cc8c90fe58033e3439064bbe812b02966fb076
const PORT = process.env.PORT || 5005;

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
