export function singnInRequest(email, passowrd) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { email, passowrd },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCESS',
    payload: { token, user },
  };
}

export function singnFailure() {
  return {
    type: '@auth/SIGN_FAILURE',
  };
}
