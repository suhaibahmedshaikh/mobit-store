import User from "../models/user-model.js";

class userRepository {
  registerUser = async ({ username, email, password }) => {
    try {
      const user = await User.create({ username, email, password });
      return user;
    } catch (error) {
      console.log("Something wrong in repository layer");
      throw new Error(error.message);
    }
  };

  updateUser = async () => {};

  deleteUser = async () => {};

  getUser = async () => {};

  getAllUser = async () => {};
}

export default userRepository;
