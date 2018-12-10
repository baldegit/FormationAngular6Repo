export interface Storage<T> {
  create(T): Promise<T>;
  read(id?: number): Promise<T>;
  update(oldV: T, newV: T ): Promise<T>;
  delete(id: number): Promise<T>;
}
