const Manager = require('../lib/Manager');

test("create manager object", () => {
    const manager = new Manager("Michelle", 1908, "michelle@test.com", 890);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("getRole() return Manager", () => {
    const manager = new Manager("Michelle", 1908, "michelle@test.com", 890);

    expect(manager.getRole()).toBe('Manager');
});

