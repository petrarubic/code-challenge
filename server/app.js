const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001;

const login = require("./login");
const routes = require("./routes");

app.use(express.json());
app.use(cors({ credentials: true }));

app.post("/login", login);
app.use("/api", routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
