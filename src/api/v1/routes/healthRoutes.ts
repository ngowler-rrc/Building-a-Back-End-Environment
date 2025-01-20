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
	const status: string = 'OK';
	const uptime: number = process.uptime();
	const timestamp: string = new Date().toISOString();
	const version: string = '1.0.0';

	res.json({
		status,
		uptime,
		timestamp,
		version,
	});
});

export default router;