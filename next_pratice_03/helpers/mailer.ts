import nodemailer from "nodemailer";
import User from "@/model/userModel";
import bcrypt from "bcryptjs";


export async function sendMail({ email, emailType, userId }: any) {
  try {
    // create a hashed token
    const hashedToken = await bcrypt.hash(userId.toString(), 10);

    // now check the type of email

    if (emailType === "VERFIY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgetPasswordToken: hashedToken,
        forgetPasswordExpiry: Date.now() + 3600000,
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "0231b166b704b9",
        pass: "eb73e7e3aed65e",
      },
    });

    const mailOption = {
      from: "shubham@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email " : "Reset your Password",
      html: `<p> Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">Here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      } </p>`,
    };


    // send mail
const mailResponse = await transport.sendMail(mailOption);

return mailResponse
  } catch (error: any) {
    console.log(error);
  }
}
