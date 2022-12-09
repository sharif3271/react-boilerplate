import axios, { AxiosResponse, AxiosError, AxiosRequestConfig, AxiosInstance } from 'axios';
import { useToast } from 'src/utils/toast';
import { useNavigate } from 'react-router';
import { JwtHelper } from './jwt-helper';

export class HttpClient {
  private http: AxiosInstance;
  private baseUrl = process.env.BASE_URL;
  private toast = useToast();
  private navigate = useNavigate();

  static isThereValidToken() {
    const token = localStorage.getItem('token');
    return token && !JwtHelper.isExpired(token);
  }
  public constructor(timeout?: number) {
    const token = localStorage.getItem('token');
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    };
    if (token && !JwtHelper.isExpired(token)) {
      headers['Authorization'] = token;
    }
    this.http = axios.create({
      baseURL: this.baseUrl,
      timeout: timeout ? timeout : 130000,
      headers,
    });
    this.http.interceptors.response.use(
      (response?: AxiosResponse) => {
        // Any status code that lie within the range of 2xx
        return response;
      },
      (error?: AxiosError) => {
        // Any status codes that falls outside the range of 2xx
        this.toast('error', 'Unexpected problem!!');
        return Promise.reject(error);
      }
    );
  }
  public get(url: string, config: AxiosRequestConfig = {}) {
    return this.http.get(url, config);
  }
  public post(url: string, data: any = {}, config: AxiosRequestConfig = {}) {
    return this.http.post(url, data, config);
  }
}
