import { AuthorEntity } from "./author.entity";

export class AuthValue implements AuthorEntity {
  name: string;
  lastname: string;

  constructor({ name, lastname }: { name: string, lastname: string }) {
    this.name = name;
    this.lastname = lastname;

  }
}
