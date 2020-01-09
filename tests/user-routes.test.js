const server = require("../api/server");
const request = require("supertest");

describe("Server Tests", () => {
    describe("GET users after authorization", () => {
        it("Should return a body", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                const token = res.body.token;

                return request(server)
                .get("/api/users")
                .set("Authorization", token)
                .then(res => {
                    expect(Array.isArray(res.body)).toBe(true);
                });
            });
        });
    });
});

describe("Server Tests", () => {
    describe("GET user 1 after authorization", () => {
        it("Should have proper ID and first/last name for first user", async () => {
            return request(server)
            .post("/api/auth/login")
            .send({ "firstName": "Joshua", "lastName": "Edgerton", "email": "joshuaxedgerton@gmail.com", "password": "pass"})
            .then(res => {
                const token = res.body.token;

                return request(server)
                .get("/api/users/1")
                .set("Authorization", token)
                .then(res => {
                    expect(res.body.id).toBe(1),
                    expect(res.body.firstName).toBe("Joshua"),
                    expect(res.body.lastName).toBe("Edgerton");
                });
            });
        });
    });
});