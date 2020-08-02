const Employee = require('../lib/Employee');

test("creates employee object", () => {
    const employee = new Employee("Bob", 1304, "bob@test.com")

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test("getRole() return Employee", () => {
    const employee = new Employee("Bob", 1304, "bob@test.com");

    expect(employee.getRole()).toBe('Employee');
});