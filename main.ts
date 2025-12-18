//Test inicial
//import {healthCheck} from "@shared/health";
///const healthStatus = healthCheck();
//console.log(`Health Status: ${healthStatus.status} at ${healthStatus.timestamp.toISOString()}`);

import { buildServer } from "@infrastructure/http/server";

const port = Number(process.env.PORT) ?? 3000;
buildServer().then(app => app.listen({port}));

