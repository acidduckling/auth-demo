import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp) {
  }

  getOrders() { 
    // let headers = new Headers();
    // let token = localStorage.getItem('token');
    // headers.append('authorization', 'Bearer ' + token);

    // let options = new RequestOptions({
    //   headers: headers
    // });
    
    // If we use AuthHttp, we do not need to use the above code to add the authorization header - its handled automatically for us.
    return this.authHttp.get('/api/orders'/*, options*/)
      .map(response => response.json());
  }
}
