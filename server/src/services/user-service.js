import userRepository from "../repositories/user-repository.js";

class UserService {
  constructor() {
    this.userRepository = new userRepository();
  }

  registerUser = async ({ username, email, password }) => {
    const user = await this.userRepository.registerUser({
      username,
      email,
      password,
    });
    return user;
  };
}

export default UserService;
