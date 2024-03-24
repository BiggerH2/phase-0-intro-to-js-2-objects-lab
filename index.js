// Write your solution in this file!
// Import the necessary functions from helpers.js
const {
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey,
} = require('./helpers.js');

describe('employees', function () {
  let employee;

  beforeEach(function () {
    // Reset employee object before each test
    employee = {
      name: 'Sam',
    };
  });

  describe('updateEmployeeWithKeyAndValue(employee, key, value)', function () {
    it('returns an employee with the original key value pairs and the new key value pair', function () {
      const updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

      expect(updatedEmployee).to.eql({
        name: 'Sam',
        streetAddress: '11 Broadway',
      });
    });

    it('it does not modify the original employee, but rather returns a clone with the new data', function () {
      // Store the original streetAddress value
      const originalStreetAddress = employee['streetAddress'];

      updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway');

      // Original employee should remain unchanged
      expect(employee['streetAddress']).to.equal(originalStreetAddress);
    });
  });

  describe('destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)', function () {
    it('updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee', function () {
      const updatedEmployee = destructivelyUpdateEmployeeWithKeyAndValue(employee, 'streetAddress', '12 Broadway');

      expect(updatedEmployee).to.eql({
        name: 'Sam',
        streetAddress: '12 Broadway',
      });

      // Original employee should also be updated
      expect(employee).to.eql(updatedEmployee);
    });
  });

  describe('deleteFromEmployeeByKey(employee, key)', function () {
    it('deletes `key` from a clone of employee and returns the new employee (it is non-destructive)', function () {
      const newEmployee = deleteFromEmployeeByKey(employee, 'name');

      expect(newEmployee['name']).to.equal(undefined);
      expect(typeof newEmployee).to.equal('object');
    });

    it('does not modify the original employee (it is non-destructive)', function () {
      const originalName = employee['name'];

      deleteFromEmployeeByKey(employee, 'name');

      // Original employee should remain unchanged
      expect(employee['name']).to.equal(originalName);
    });
  });

  describe('destructivelyDeleteFromEmployeeByKey(employee, key)', function () {
    it('returns employee without the deleted key/value pair', function () {
      const newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      expect(newEmployee['name']).to.equal(undefined);
    });

    it('modifies the original employee', function () {
      const newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');

      // Original employee should be modified and equal to the returned value
      expect(employee).to.equal(newEmployee);
    });
  });
}); 