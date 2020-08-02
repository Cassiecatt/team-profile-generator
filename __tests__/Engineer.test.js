const Engineer = require("../lib/Engineer");

test("create engineer object", () => {
    const engineer = new Engineer("Michael", 1004, "michael@test.com", "Mich123");

    expect(engineer.github).toEqual(expect.any(String));
});

test("getRole() return Engineer", () => {
    const engineer = new Engineer("Michael", 1004, "michael@test.com", "Mich123");

    expect(engineer.getRole()).toBe(Engineer);
});


