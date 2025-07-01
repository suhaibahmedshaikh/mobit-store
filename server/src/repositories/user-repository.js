import User from "../models/user-model.js";

const userRepository = {
  registerUser: async ({ username, email, password }) => {
    const newUser = await User.create({ username, email, password });
    return newUser;
  },
  getUser: async () => {},
  getAllUser: async () => {},
  updateUser: async () => {},
  deleteUser: async () => {},
};

export default userRepository;
