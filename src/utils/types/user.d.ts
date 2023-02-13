declare namespace UserLib {
  let userModel: User
};

export interface PR {
  squat: Number,
  bench: Number,
  deadlift: Number
};

export interface UserModel {
  username: string,
  password: string | void,
  email: string,
  todo: array,
  pr: PR
};