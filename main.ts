import {healthCheck} from "@shared/health";

const healthStatus = healthCheck();
console.log(`Health Status: ${healthStatus.status} at ${healthStatus.timestamp.toISOString()}`);