const UserActionServices = require('../services/UserActionServices');
const Review = require('../models/review');

// Mocking the Review model
jest.mock('../models/review', () => ({
  create: jest.fn(),
}));

describe('UserActionServices', () => {
  describe('putReview', () => {
    it('should return error for internal server error', async () => {
      const reqData = {
        comment: 'This is a test comment',
        _id: 'user_id',
        image: 'image_url',
        name: 'Test User',
      };

      // Mocking Review.create to return null (error occurred)
      Review.create.mockRejectedValue(new Error('Internal Server Error'));

      const result = await UserActionServices.putReview(reqData);
      expect(result.error).toBe(true);
      expect(result.msg).toBe('Internal Server Error');
    });

    it('should return success message and review data for successful review submission', async () => {
      const reqData = {
        comment: 'This is a test comment',
        _id: 'user_id',
        image: 'image_url',
        name: 'Test User',
      };

      // Mocking Review.create to return a review object
      const reviewObject = {
        _id: 'review_id',
        user: 'user_id',
        comment: reqData.comment,
        image: reqData.image,
        name: reqData.name,
      };
      Review.create.mockResolvedValue(reviewObject);

      const result = await UserActionServices.putReview(reqData);
      expect(result.error).toBe(false);
      expect(result.msg).toBe('Review Submitted Successfully');
      expect(result.data).toEqual(reviewObject);
    });
  });
});
