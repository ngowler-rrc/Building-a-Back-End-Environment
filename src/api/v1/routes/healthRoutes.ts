import express, { Router } from "express";

const router: Router = express.Router();

/**
 * @openapi
 * /api/v1/health:
 *  get:
 *   summary: Return server's status and api version
 *   tags: [Health]
 *   responses:
 *    200:
 *     description: Returns server's status and api version.
*/
router.get("/health", (req, res) => {
	res.json({
		status: "OK",
		uptime: process.uptime(),
		timestamp: new Date().toISOString(),
		version: "1.0.0",
	});
});

export default router;