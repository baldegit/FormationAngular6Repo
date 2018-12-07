export interface Manager<T> {

  collection:  Set<T>;

  create(value: T): Promise<T>;

  read(id: number | null): Promise<T>;

  update(target: T, updates: any): Promise<T> |Promise<Error>;

  delete(target: T): Promise<boolean>;
}
