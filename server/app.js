const express = require("express");
const app = express();
const port = 3001;

const login = require("./login");
const routes = require("./routes");

app.use(express.json());

app.post("/login", login);
app.use("/api", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
