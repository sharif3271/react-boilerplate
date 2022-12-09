import { HttpClient } from 'src/services/config/http';
import { HOME_URLS } from 'src/services/config/url';

export class HomeServices {

  private http: HttpClient;

  public constructor() {
    this.http = new HttpClient();
  }
  async getPostList(): Promise<any> {
    return this.http.get(HOME_URLS.postList);
  }
  async postContactUs(): Promise<any> {
    return this.http.post(HOME_URLS.contactUs);
  }
}