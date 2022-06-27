import { axiosInstance, responseBody } from './axiosInstance';

export interface Michi {
  _id: string;
  name: string;
  race: string;
  description: string;
  age: number;
  imgUrl?: string;
}

export interface MichiResponse {
  michis: Michi[];
}

const headers = { Authorization: `Bearer ${localStorage.getItem('token')}` };

const michisRequests = {
  get: (url: string) => axiosInstance.get<Michi>(url).then(responseBody),
  post: (url: string, body: Michi) => axiosInstance.post<Michi>(url, body, { headers }).then(responseBody),
  delete: (url: string) => axiosInstance.delete<Michi>(url, { headers }).then(responseBody),
};

export const michisAPI = {
  getMichis: (): Promise<MichiResponse> => michisRequests.get('/michis/'),
  getMichiById: (id: string): Promise<Michi> => michisRequests.get(`/michis/${id}`),
  addMichi: (michi: Michi): Promise<Michi> => michisRequests.post('/michis', michi),
  deleteMichi: (id: string): Promise<Michi> => michisRequests.delete(`/michis/${id}`),
};
