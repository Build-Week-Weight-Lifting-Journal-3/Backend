const server = require("../api/server");
const request = require("supertest");
const authrouter = require ("../api/auth/auth-router")

describe("Server Tests", () => {
    describe("GET /api/auth/register", () => {
        it("Should respond with status code of 404", async () => {
            await request(server).get("/api/auth/register").then(res => {
                expect(res.status).toBe(404);
            });
        });
    });
});

describe("Server Tests", () => {
    describe("GET /api/auth/register", () => {
        it("Should respond with text/html", async () => {
            await request(server).get("/api/auth/register").then(res => {
                expect(res.type).toBe("text/html");
            });
        });
    });
});


describe("Server Tests", () => {
    describe("GET /api/auth/login", () => {
        it("Should respond with status code of 404", async () => {
            await request(server).get("/api/auth/login").then(res => {
                expect(res.status).toBe(404);
            });
        });
    });
});

describe("Server Tests", () => {
    describe("GET /api/auth/login", () => {
        it("Should respond with text/html", async () => {
            await request(server).get("/api/auth/login").then(res => {
                expect(res.type).toBe("text/html");
            });
        });
    });
});

describe("Server Tests", () => {
    describe("GET /api/auth/login", () => {
        it("Should respond with status 200", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                expect(res.status).toBe(200);
            })
            });
        });
    });

describe("Server Tests", () => {
    describe("GET /api/auth/login", () => {
        it("Should respond with text", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                expect(res.text);
            })
        });
    });
});

describe("Server Tests", () => {
    describe("GET /api/auth/login", () => {
        it("Should respond with proper login message", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                expect(res.body.message).toBe("Welcome Joshua Edgerton!");
            })
        });
    });
});

describe("Server Tests", () => {
    describe("GET /api/auth/login", () => {
        it("Should respond with proper login ID", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                expect(res.body.id).toBe(1);
            })
        });
    });
});