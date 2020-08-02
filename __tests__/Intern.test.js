const Intern = require('../lib/Intern');

test("create intern object", () => {
    const intern = new Intern("Sara", 8970, "sara@test.com", "UofA");

    expect(intern.school).toEqual(expect.any(String));
});

test("getRole() return Intern", () => {
    const intern = new Intern("Sara", 8970, "sara@test.com", "UofA");
    
    expect(intern.getRole()).toBe('Intern');
});