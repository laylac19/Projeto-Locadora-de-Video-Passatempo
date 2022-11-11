import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class LocacaoService {

    constructor(private http: HttpClient) {
    }

    resourceUrl = environment.apiUrl + '/classes';
}
