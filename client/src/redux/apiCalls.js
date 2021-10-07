import { loginStart, loginSuccess, loginFailure } from './userRedux';
import { publicRequest } from '../requestMethods';

export const login = async (dispatch, userCredential) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', userCredential);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
