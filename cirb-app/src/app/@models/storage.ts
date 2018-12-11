import { Observable } from 'rxjs';

export interface Storage<T> {
  create(param: T): Observable<T>;
  read(id?: number): Observable<Array<T>>;
  update(oldV: T, newV: T ): Observable<T>;
  delete(id: number): Observable<boolean>;
}
