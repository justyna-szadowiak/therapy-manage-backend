export interface User {
  id: number;
  name: string;
  middle_name: string;
  surname: string;
  title: string;
  email: string;
  is_admin: boolean;
  password: string;
}

export type UserProfile = Omit<User, 'password'>
