/* eslint-disable comma-dangle */
import axios from 'axios';
import {ApiContants} from '../constants';

const AuthRequest = axios.create({
  baseURL: ApiContants.BACKEND_API.BASE_API_URL,
});

const register = async user => {
  if (!user?.username || !user?.email || !user?.password) {
    return {
      status: false,
      message: 'Please fill up all the fields'
    };
  }
  try {
    let requestBody = {
      username: user?.username,
      email: user?.email,
      password: user?.password
    };

    let registerResponse = await AuthRequest.post(
      ApiContants.BACKEND_API.REGISTER,
      requestBody
    );

    console.log(registerResponse?.data);

    return registerResponse?.data;
  } catch (error) {
    console.log(error);
    return {
      status: false,
      message: 'Oops!! Something went wrong!'
    };
  }
};

const checkUserExist = async (type, value) => {
  try {
    let params = {[type]: value};
    let userCheckResponse = await AuthRequest.get(
      ApiContants.BACKEND_API.USER_EXIST,
      {params},
    );
    return userCheckResponse?.data;
  } catch (error) {
    console.log(error);
    return {status: false, message: 'Oops! Something went wrong'};
  }
};

export default {register, checkUserExist};
