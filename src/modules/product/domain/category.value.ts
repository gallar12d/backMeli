import { CategoryEntity } from "./category.entity";

export class CategoryValue implements CategoryEntity {
  name: string;
  constructor({ name }: { name: string }) {
    this.name = name;
  }
}
