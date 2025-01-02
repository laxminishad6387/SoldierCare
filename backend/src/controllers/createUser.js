import User from "../schema/userSchema.js"
export const createUser = async (req, res) => {
    const userDetails = req.body;
    try{
        const user = await User.create({
            email: userDetails.email,   
            password: userDetails.password,
            role: userDetails.role
        }) .then((response) => {
            res
              .json({ Message: "User is created successfully", data: response })
              .status(201);
          })
          .catch((err) => {
            res.json({ Message: "User failed to create", error: err }).status(500);
          });
      } catch (err) {
        res.json({ Message: "User failed to create", error: err }).status(500);
      }
    }


