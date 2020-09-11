export const typeDefs = ["type Query {\n  sayBye: String!\n  sayHello(name: String!): SayHelloResponse!\n  GetAllUser: getUserAllResponse!\n}\n\ntype SayHelloResponse {\n  text: String!\n  error: Boolean!\n}\n\ntype User {\n  id: Int!\n  email: String!\n  name: String!\n  country: String!\n  password: String!\n  createdAt: String!\n  updatedAt: String\n}\n\ntype SignInResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype Mutation {\n  SignIn(email: String!, password: String!): SignInResponse!\n  SignUp(email: String!, name: String!, country: String!, password: String!): SignUpResponse!\n}\n\ntype SignUpResponse {\n  ok: Boolean!\n  error: String\n  token: String\n}\n\ntype getUserAllResponse {\n  users: [User]\n}\n"];
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

export interface Mutation {
  SignIn: SignInResponse;
  SignUp: SignUpResponse;
}

export interface SignInMutationArgs {
  email: string;
  password: string;
}

export interface SignUpMutationArgs {
  email: string;
  name: string;
  country: string;
  password: string;
}

export interface SignInResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}

export interface SignUpResponse {
  ok: boolean;
  error: string | null;
  token: string | null;
}
