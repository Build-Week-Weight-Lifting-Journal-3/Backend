const server = require("../api/server");
const request = require("supertest");

describe("Server Tests", () => {
    describe("GET after authorization", () => {
        it("Should return a body", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                const token = res.body.token;

                return request(server)
                .get("/api/exercises")
                .set("Authorization", token)
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                });
            });
        });
    });
});

describe("Server Tests", () => {
    describe("GET after authorization", () => {
        it("Should return Bench Press as first exercise", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                const token = res.body.token;

                return request(server)
                .get("/api/exercises")
                .set("Authorization", token)
                .then(res => {
                    expect((res.body[0].name)).toBe("Bench Press");
                });
            });
        });
    });
});