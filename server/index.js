const express = require("express"); // Corregido aquí
const app = express();
app.use("/", (req, res) => {
  res.send("Server running");
});
app.listen(5001, () => {
  console.log("Server started on port 5001");
});
