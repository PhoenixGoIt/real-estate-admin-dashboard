// ----------------------------------------------------------------------------------------- \\

import { InfoLog } from "../utils/info";

export const baseUrlConst = `${process.env.NEXT_PUBLIC_HOST_API}`;
// ----------------------------------------------------------------------------------------- \\
// User
export const registerUserConst = `${process.env.NEXT_PUBLIC_REGISTER_API}?populate=*`;
export const loginUserConst = `${process.env.NEXT_PUBLIC_LOGIN_API}?populate=*`;
export const getUserConst = `${process.env.NEXT_PUBLIC_GETUSER_API}?populate=*`;
// ----------------------------------------------------------------------------------------- \\
// Property
export const getAllPropertyConst = `${process.env.NEXT_PUBLIC_PROPERTY_LIST}?populate=*`;
export const getPropertyByIdConst = `${process.env.NEXT_PUBLIC_PROPERTY_LIST}`; // Id

InfoLog("Api", {
  registerUserConst,
  loginUserConst,
  getUserConst,
  getAllPropertyConst,
  getPropertyByIdConst,
});
