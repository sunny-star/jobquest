import Users from "../models/userModel.js";


export const register = async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;

  //validate fileds

  if (!firstName) {
    return res.status(400).json({ status: 'failed', message: "First Name is required" });
    //next("First Name is required");
  }
  if (!lastName) {
    return res.status(400).json({ status: 'failed', message: "Last Name is required" });
  }
  if (!email) {
    return res.status(400).json({ status: 'failed', message: "Email is required" });
  }
  if (!password) {
    return res.status(400).json({ status: 'failed', message: "Password is required" });
  }
  try {
    const userExist = await Users.findOne({ email });

    if (userExist) {
      return res.status(400).json({ status: 'failed', message: "Email Address already exists" });
    }

    const user = await Users.create({
      firstName,
      lastName,
      email,
      password,
    });

    //user token
    const token = await user.createJWT();

    res.status(201).send({
      success: true,
      message: "Account created successfully",
      user:{
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        accountType: user.accountType,
      },
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 'failed', message: "Server Error" });
    //res.status(404).json({ message: error.message });
  }
};


export const signIn = async (req, res, next) => {

  const { email, password } = req.body;

  try {
    //validation
    if (!email || !password) {
      return res.status(400).json({ status: 'failed', message: "Please Provide User Credentials" });
    }

    // find user by email
    const user = await Users.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ status: 'failed', message: "Invalid email or password" });
    }

    // compare password
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({ status: 'failed', message: "Invalid email or password" });
    }

    user.password = undefined;

    const token = user.createJWT();

    res.status(201).json({
      success: true,
      message: "Login successfully",
      user,
      token,
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({ status: 'failed', message: "Server Error" });
    //res.status(404).json({ message: error.message });
  }
};