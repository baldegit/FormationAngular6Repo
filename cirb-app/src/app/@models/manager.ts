import { Observable } from 'rxjs';

export interface Manager<T> {

  collection:  Set<T>;

  create(value: T): Observable<T>;

  read(id: number | null): Observable<T>;

  update(target: T, updates: any): Observable<T>;

  delete(target: T): Observable<boolean>;
}
