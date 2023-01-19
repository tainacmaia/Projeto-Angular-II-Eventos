import { User } from "src/app/models/user.model";

export interface LoginResponse {
  user: User;
  token: string;
}
