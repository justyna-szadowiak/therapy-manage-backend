import { Injectable } from '@nestjs/common';
import { User, UserProfile } from './interfaces/user';
import { JwtToken } from './interfaces/jwt-token';
import { JwtService } from '@nestjs/jwt';
import * as users from './data/users.json';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(email: string, password: string): Promise<User> {
    const foundUser: User = users.find((user) => user.email === email);
    if (foundUser && foundUser.password === password) {
      return foundUser;
    }
    return null;
  }

  async validateUserProfile(userProfile: UserProfile): Promise<User> {
    const { id } = userProfile;

    const foundUser: User = users.find((user) => user.id === id);
    if (foundUser && foundUser.id === id) {
      return foundUser;
    }
    return null;
  }

  public async logIn(currentUser: User): Promise<JwtToken> {
    const { password, ...profile } = currentUser;

    return { jwt_token: this.jwtService.sign(profile) };
  }
}
