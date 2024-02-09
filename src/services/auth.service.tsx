import { authKey } from "@/constants/storageKey";
import { decodedToken } from "@/utils/jwt";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { JwtPayload, jwtDecode } from "jwt-decode";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  // console.log(authToken);
  if (authToken) {
    const decodedData = decodedToken(authToken);
    return decodedData;
  } else {
    return "";
  }
};


export const getUserInfoFromToken =async (token:string)=>{
  const res =  jwtDecode(token) as {email:string, exp:number, iat:number,id:string,role:string}
  return res
}

export const getTokenFromKey=()=>{
  const authToken = getFromLocalStorage(authKey);
  const res =  jwtDecode(authToken as string) as {email:string, exp:number, iat:number,id:string,role:string}
  return res

}
export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  return !!authToken;
};

export const removeUserInfo = (key: string) => {
  return localStorage.removeItem(key);
};
