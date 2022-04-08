export interface User extends UserProfile {
  password: string,
  is_admin: boolean,
}

export interface UserProfile {
  id: number,
  name: string,
  middle_name: string,
  surname: string,
  title: string,
  email: string,
}
