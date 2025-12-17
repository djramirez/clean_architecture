import { describe, it, expect } from "vitest";
import { ping, isAlive, healthCheck } from "@shared/health";

describe("health", () => {
  it("returns pong from ping()", () => {
    expect(ping()).toBe("pong");
  });

  it("isAlive() returns true", () => {
    expect(isAlive()).toBe(true);
  });

  it("healthCheck returns status ok and a timestamp", () => {
    const result = healthCheck();
    expect(result.status).toBe("ok");
    expect(result.timestamp).toBeInstanceOf(Date);
  });
});
