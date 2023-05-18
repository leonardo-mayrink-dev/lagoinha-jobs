import axios from "axios";

export const api = axios.create({
  // baseURL: 'http://localhost',
});

export class Api {
  static get<T>(url: string) {
    return api.get<T>(url);
  }
  static post<T>(url: string, payload: T) {
    return api.post<T>(url, payload);
  }
  static put<T>(url: string, payload: T) {
    return api.put<T>(url, payload);
  }
  static delete<T>(url: string) {
    return api.delete<T>(url);
  }
}
