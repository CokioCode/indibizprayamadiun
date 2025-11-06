import { asyncHandler, ResponseHelper } from "../../shared/utils/index.js";
import { Context } from "hono";
import { AuthModel } from "../models/index.js";
import { LoginInput } from "../../shared/types/auth.js";

export const authController = {
  login: asyncHandler(async (c: Context) => {
    const validatedBody = c.get("validatedBody") as LoginInput;
    const { token } = await AuthModel.login(validatedBody);

    return ResponseHelper.success(c, { token }, "Login successful");
  }),
};
