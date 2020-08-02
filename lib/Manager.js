const Employees = require("../lib/Employees");

class Manager extends Employees {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber);
    this.officeNumber = officeNumber;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
  getRole() {
    return Manager;
  }
}

module.exports = Manager;
