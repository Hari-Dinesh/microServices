import Admin from "../Models/adminModel.js";
import bcrypt from "bcryptjs";
import User from "../Models/UserModel.js";
class AdminController {
  static async adminCreate(req, res) {
    try {
      const value=req.body
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(value.Password, salt);
      const data = new Admin({
        Email: value.Email,
        Password: hashedPassword,
      });
      
      data.save();
      res.status(201).json({ message: "Successfully Registered" });
    } catch (error) {
      res.status(501).send("unable to create the user");
    }
  }

  static async adminLogin(req, res) {
    try {
      const value=req.body
      const user = await Admin.findOne({ Email: value.Email });
      if (!user) {
        return res.status(401).send({ message: "Invalid Email" });
      }
      const passwordMatch = await bcrypt.compare(value.Password, user.Password);
      if (!passwordMatch) {
        return res.status(401).send("Invalid password");
      }
      res.send("logged in sucessfully")
    } catch (error) {
      res.status(402).json({status:402,success:false,message:error.message});
    }
   
  }
  static async validateAdmin(req,res){
    try {
      const {adminid}=req.body;
      const data=await Admin.findById(adminid);
      if(!data){
        res.send("error")
      }
      res.json(data)
    } catch (error) {
      res.send("error while finding the Admin details")
    }
  }
  //send notifications to users
}


export { AdminController };
