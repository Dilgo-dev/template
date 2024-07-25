import express from "express";
import { PORT } from "./utils/env.js";

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ message: "Witch started", status: "ok" });
});

app.listen(PORT, () => {
    console.info(`Application started on port http://localhost:${PORT}`);
});
