const User = require('../models/User');
const UserServices = require('../services/UserServices');

jest.mock('../models/User');
describe('UserServices', () => {
  describe('getAllUsers', () => {
    it('should return all users', async () => {
      // Mock the behavior of User model's `find` method
      const mockUsers = [
        { name: 'kartik', email: 'kartik@gmail.com', password: 'pass1', age: 25, gender: 'Male', weight: 70, height: 170, image: 'abc.png' },
        { name: 'patel', email: 'patel@gmail.com', password: 'pass2', age: 30, gender: 'Female', weight: 60, height: 160, image: 'abc.png' }
      ];
      User.find.mockResolvedValue(mockUsers);

      // Call the service method
      const result = await UserServices.getAllUsers();
    });

    it('should handle errors', async () => {
      // Mock the behavior of User model's `find` method to throw an error
      const errorMessage = 'Database Error';
      const result = await UserServices.getAllUsers();

      // Assertions
      expect(result.error).toBe(true);
      expect(result.msg).toBe(errorMessage);
    });
  });

});
