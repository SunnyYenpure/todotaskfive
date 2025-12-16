export interface IgenericResponse<T> {
  status: 'success' | 'error';
  message: string;
  data: T;
}
