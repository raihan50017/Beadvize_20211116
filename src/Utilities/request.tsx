import axiosConfig from "./axiosConfig";
import * as dotenv from "dotenv";
import axios from "axios";
// import axios from 'axios'
import { ImSpinner2 } from "react-icons/im";

dotenv.config();
let url = process.env.REACT_APP_API_URL;

let LINKEDIN_STATE = "a_random_string_that_is_really_difficult_and_random";
const LINKEDIN_SCOPE = "r_liteprofile r_emailaddress";
const LINKEDIN_REDIRECT = "http://localhost:3003/api/v1/auth/redirect";
/* const LINKEDIN_CLIENT_ID = "77zld222pg71y5";
const LINKEDIN_CLIENT_SECRET = "k4wNB6vTx53L9NMD"; */
const LINKEDIN_CLIENT_ID = "77hatqpufvvoyc";
const LINKEDIN_CLIENT_SECRET = "ncBpcchIyxIKJbPe";

export const getURLWithQueryParams = (base: any, params: any) => {
    const query = Object.entries(params)
        .map(([key, value]: any) => `${key}=${encodeURIComponent(value)}`)
        .join("&");
    
        return `${base}?${query}`;

   
};



export const linkedin = getURLWithQueryParams(

    "https://www.linkedin.com/oauth/v2/authorization",
    {
        response_type: "code",
        client_id: LINKEDIN_CLIENT_ID,
        redirect_uri: LINKEDIN_REDIRECT,
        state: LINKEDIN_STATE,
        scope: LINKEDIN_SCOPE,
    }
);

// export const Oauth = async (code:any) => {
   
//     const LINKEDIN_URL = getURLWithQueryParams(
//         "https://www.linkedin.com/oauth/v2/accessToken",
//         {
//           grant_type: "authorization_code",
//           code: code,
//           redirect_uri: LINKEDIN_REDIRECT,
//           client_id: LINKEDIN_CLIENT_ID,
//           client_secret: LINKEDIN_CLIENT_SECRET
//         }
//       );
//       let tok;
//       let resp = await fetch(LINKEDIN_URL, {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" }
//       });
//       if (resp.ok) tok = await resp.json()
//       return (tok)
// //   return (
// //       <ImSpinner2 />
// //   );
// };



export const logintest = async (user: object) => {
    const result = await axiosConfig.post(
        url + "api/v1/auth/authenticate",
        user
    );
    return result.data;
};

export const changePassword = async (data: any) => {
/*     const request = await AxiosPromise(
      'post',
      `${url}/auth/changepassword`,
      data
      return request.data;
    ); */
    const result = await axiosConfig.post(url + "api/v1/auth/changepassword", data);
    return result.data;
  };

export const newsletter = async (email:any) => {
    const result = await axios.post(url + "api/v1/auth/newsletter", email);
    return result.data
}

export const sendContact = async (mission:any) => {
    const result = await axios.post(url + "api/v1/auth/sendContact", mission);
    return result.data
}

export const Oauth = async (code:any) => {
    const result = await axios.post("http://localhost:3001/users/loginLinkedin", code);
    return result.data
}

export const getMe = async () => {
    const result = await axiosConfig.get(url + "api/v1/user/me");
    return result.data;
};

export const getUser = async (id: string) => {
    const result = await axiosConfig.get(url + "api/v1/user/" + id);
    return result.data;
};

export const signup = async (user: object) => {
    const result = await axiosConfig.post(url + "api/v1/auth/register", user);
    if (result) {
        localStorage.setItem("register", result.data.accessToken);
    }
    return result.data;
};

export const updateUser = async (user: object, config: object) => {
    const result = await axiosConfig.patch(
        url + "api/v1/user/me/",
        user,
        config
    );
    return result.data;
};

export const hidden = async (project: object, config: object) => {
    const result = await axiosConfig.post(
        url + "api/v1/project",
        project,
        config
    );
    return result.data;
};

export const validateComtpe = async (activationToken: string) => {
    const token = {
        activationToken: activationToken,
    };
    const result = await axiosConfig.post(
        url + "api/v1/user/me/activate",
        token
    );
    return result.data;
};

export const resetPasswordToken = async (email: object) => {
    const result = await axiosConfig.post(
        url + "api/v1/auth/resetpasswordtoken",
        email
    );
    return result.data;
};

export const resetPassword = async (password: string, token: string) => {
    const user = {
        password: password,
        resetPasswordToken: token,
    };
    const result = await axiosConfig.post(
        url + "api/v1/auth/resetpassword",
        user
    );
    return result.data;
};

export const getProject = async () => {
    const result = await axiosConfig.get(url + "api/v1/project/mine");
    return result.data;
};

export const endProject = async (id: string) => {
    const result = await axiosConfig.post(
        url + "api/v1/project/" + id + "/end"
    );
    return result.data;
};

export const saveFile = async (file: any) => {
    console.log("file", file);
    const data = new FormData();
    data.append("file", file);
    let accessToken = localStorage.getItem("currentUser");
    const config = {
        headers: {
            "content-type": "multipart/form-data",
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const result = await axiosConfig.post(
        url + "api/v1/user/me/picture",
        data,
        config
    );
    return result.data;
};

export const getProjectById = async (id: string) => {
    const result = await axiosConfig.get(url + "api/v1/project/" + id);
    return result.data;
};

export const getProposotion = async () => {
    const result = await axiosConfig.get(url + "api/v1/proposition/mine");
    return result.data;
};

export const getPropositionById = async (id: string) => {
    const result = await axiosConfig.get(url + "api/v1/proposition/" + id);
    return result.data;
};

export const createProposition = async (id: string) => {
    const result = await axiosConfig.post(
        url + "api/v1/proposition/" + id + "/send"
    );
    return result.data;
};

export const updateProposition = async (id: string, proposition: object) => {
    const result = await axiosConfig.patch(
        url + "api/v1/proposition/" + id,
        proposition
    );
    return result.data;
};

export const getFiles = async (id: string) => {
    const result = await axiosConfig.get(
        url + "api/v1/user/me/companydoc/" + id
    );
    return result.data;
};

export const propositionOfProject = async (id: string) => {
    const result = await axiosConfig.get(
        url + "api/v1/project/" + id + "/propositions"
    );
    return result.data;
};

export const shortlister = async (id: string) => {
    const result = await axiosConfig.post(
        url + "api/v1/proposition/" + id + "/shortlist"
    );
    return result.data;
};

export const declineProp = async (id: string) => {
    const result = await axiosConfig.post(
        url + "api/v1/proposition/" + id + "/decline"
    );
    return result.data;
};

export const rejectProp = async (id: string) => {
    const result = await axiosConfig.post(
        url + "api/v1/proposition/" + id + "/reject"
    );
    return result.data;
};

export const startMission = async (id: string) => {
    const result = await axiosConfig.post(
        url + "api/v1/project/" + id + "/start"
    );
    return result.data;
};
