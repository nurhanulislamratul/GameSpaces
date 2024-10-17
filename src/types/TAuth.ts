export type TUser = {
  _id: string;
  name: string;
  phone: string;
  address: string;
  email: string;
  role: string;
};

export type TAuth = {
  accessToken: string | null;
  refreshToken?: string | null;
  user: TUser | null;
};
