import { Api } from "./api";
import { ApiResponse } from "apisauce";
import { GeneralApiProblem, getGeneralApiProblem } from "./api/api-problem";

export interface User {
  id: number;
  username: string;
  email: string;
  admin: boolean;
  active: boolean;
}

export type GetUsersResult = { kind: "ok"; users: User[] } | GeneralApiProblem;
export type GetUserResult = { kind: "ok"; user: User } | GeneralApiProblem;

export class UserApi extends Api {
  convertUser(raw): User {
    return {
      id: raw.id,
      username: raw.username,
      email: raw.email,
      admin: raw.admin,
      active: raw.active
    };
  }

  async getUsers(): Promise<GetUsersResult> {
    const response: ApiResponse<any> = await this.apisauce.get("/api/v1/users");

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const rawUsers = response.data;
      const resultUsers: User[] = rawUsers.map(this.convertUser);
      return { kind: "ok", users: resultUsers };
    } catch {
      return { kind: "bad-data" };
    }
  }
}
