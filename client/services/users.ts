import { Api } from "./api";
import { ApiResponse } from "apisauce";
import { GeneralApiProblem, getGeneralApiProblem } from "./api/api-problem";
import { User } from "./types";

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

  async getUserById(token: string): Promise<GetUserResult> {
    this.apisauce.setHeader("Authorization", `Bearer ${token}`);
    const response: ApiResponse<any> = await this.apisauce.get(
      `/api/v1/users/${token}`
    );

    if (!response.ok) {
      const problem = getGeneralApiProblem(response);
      if (problem) return problem;
    }

    try {
      const user: User = response.data.data;
      return { kind: "ok", user: user };
    } catch {
      return { kind: "bad-data" };
    }
  }

  async getUsers(token: string): Promise<GetUsersResult> {
    this.apisauce.setHeader("Authorization", `Bearer ${token}`);
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
