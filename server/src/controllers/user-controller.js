import UserService from "../services/user-service.js";

const userService = new UserService();

const createUser = async (req, res) => {
  try {
    const user = await userService.registerUser(req.body);
  } catch (error) {}
};

export { createUser };
