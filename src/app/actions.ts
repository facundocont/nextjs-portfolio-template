"use server";

import { ContactFormData } from "@/config/interfaces";
import { verifyCaptchaToken } from "@/utils/captcha";
import { sendEmailAdmin } from "@/utils/sendEmail";

export async function contactUseAction(
  token: string | null,
  data: ContactFormData
) {
  if (!token) {
    return {
      success: false,
      message: "Token not found",
    };
  }

  // Verify the token
  const captchaData = await verifyCaptchaToken(token);

  if (!captchaData) {
    return {
      success: false,
      message: "Captcha Failed",
    };
  }

  if (!captchaData.success || captchaData.score < 0.5) {
    return {
      success: false,
      message: "Captcha Failed",
      errors: !captchaData.success ? captchaData["error-codes"] : undefined,
    };
  }

  // Do anything with the formData
  try {
    await sendEmailAdmin({ data });
    return {
      success: true,
      message: "Message sent successfully",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
