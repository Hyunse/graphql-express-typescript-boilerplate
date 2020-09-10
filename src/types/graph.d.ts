export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n  GetAllUser: getUserAllResponse!\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  name: String!\n  country: String!\n  password: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype getUserAllResponse {\n  users: [User]\n}\n"];
/* tslint:disable */

export interface Query {
  sayBye: string;
  sayHello: SayHelloResponse;
  GetAllUser: getUserAllResponse;
}

export interface SayHelloQueryArgs {
  name: string;
}

export interface SayHelloResponse {
  text: string;
  error: boolean;
}

export interface getUserAllResponse {
  users: Array<User> | null;
}

export interface User {
  id: number;
  email: string;
  name: string;
  country: string;
  password: string;
  createdAt: string;
  updatedAt: string | null;
}
