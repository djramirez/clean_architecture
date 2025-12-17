export function ping(): string {
	return "pong";
}

export function isAlive(): boolean {
	return true;
}

export function healthCheck(): { status: string; timestamp: Date } {
    return {
         status: "ok",
         timestamp: new Date()
         };
}

