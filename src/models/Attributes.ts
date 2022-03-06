export class Attributes<T> {
  constructor(private data: T) {}

  // using generics/Generic Constraint with method definitions to avoid issues that may be caused by using unions

  //   get(key: string): string | number {
  //     return this.data[key];
  //   }

  // <K extends keyof T> type of K can only be one of the keys of T
  // T[K] - Take the T and lookup for the K type inside it
  get<K extends keyof T>(key: K): T[K] {
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
