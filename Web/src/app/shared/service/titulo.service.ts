import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {TituloListModel} from "../../model/titulo-list.model";
import {TituloModel} from "../../model/titulo.model";
import {SelectItem} from "primeng/api";

@Injectable({
    providedIn: 'root'
})
export class TituloService {

    constructor(private http: HttpClient) {
    }

    resourceUrl = environment.apiUrl + '/titulos';

    findById(id: number): Observable<TituloModel> {
        return this.http.get<TituloModel>(this.resourceUrl + '/' + id);
    }

    fillDropdown(): Observable<SelectItem[]>{
        return this.http.get<SelectItem[]>(this.resourceUrl + '/dropdown')
    }

    findAll(): Observable<TituloListModel[]> {
        return this.http.get<TituloListModel[]>(this.resourceUrl);
    }

    insert(entity: TituloModel): Observable<TituloModel> {
        return this.http.post<TituloModel>(this.resourceUrl, entity);
    }

    update(entity: TituloModel): Observable<TituloModel> {
        return this.http.put<TituloModel>(this.resourceUrl, entity);
    }

    delete(id: number): Observable<TituloModel> {
        return this.http.delete<TituloModel>(this.resourceUrl + '/' + id);
    }
}
