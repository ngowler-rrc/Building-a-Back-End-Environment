import express, { Express } from "express";

import setupSwagger from "../config/swagger";
import healthRoutes from "./api/v1/routes/healthRoutes";

const app: Express = express();

setupSwagger(app);

/**
 * @openapi
 * /:
 *  get:
 *   summary: Display Hello World!
 *   tags: [Home]
 *   responses:
 *    200:
 *     description: Displays Hello World!
*/
app.get("/", (req, res) => {
    res.send("Hello World!");
});

/**
 * @openapi
 * /tasks:
 *  get:
 *   summary: Retrieve a list of tasks
 *   tags: [Tasks]
 *   responses:
 *    200:
 *     description: A list of tasks
*/
app.get("/tasks", (req, res) => {
    res.send("Retrieve tasks");
});

app.use('/api/v1', healthRoutes);

export default app;
