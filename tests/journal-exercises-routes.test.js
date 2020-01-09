const server = require("../api/server");
const request = require("supertest");

describe("Server Tests", () => {
    describe("GET journal exercises after authorization", () => {
        it("Should return a body", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                const token = res.body.token;

                return request(server)
                .get("/api/jouexe")
                .set("Authorization", token)
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                });
            });
        });
    });
});

describe("Server Tests", () => {
    describe("GET journal exercises after authorization", () => {
        it("Checks for existing linked journal with the Id of 1", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                const token = res.body.token;

                return request(server)
                .get("/api/jouexe")
                .set("Authorization", token)
                .then(res => {
                    expect(res.body[0].journalId).toBe(1);
                });
            });
        });
    });
});