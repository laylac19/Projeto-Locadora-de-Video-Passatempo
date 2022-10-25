import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";

import {SelectItem} from "primeng/api";
import {ClienteListModel} from "../../model/cliente-list.model";
import {ClienteModel} from "../../model/cliente.model";
import {SocioListModel} from "../../model/socio-list.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

    constructor(private http: HttpClient) {
    }

    resourceUrl = environment.apiUrl + '/cliente';

    findAllActive(): Observable<ClienteListModel[]> {
        return this.http.get<ClienteListModel[]>(this.resourceUrl);
    }

    findAllDependents(status: boolean): Observable<ClienteListModel[]> {
        return this.http.get<ClienteListModel[]>(this.resourceUrl + '/dependentes/' + status);
    }

    findAllPartners(status: boolean): Observable<SocioListModel[]> {
        return this.http.get<SocioListModel[]>(this.resourceUrl + '/socios/' + status);
    }

    findById(id: number): Observable<ClienteModel> {
        return this.http.get<ClienteModel>(this.resourceUrl + '/' + id);
    }

    fillNonPartnersCustomersDropdown(): Observable<SelectItem[]>{
        return this.http.get<SelectItem[]>(this.resourceUrl + '/clientes/dropdown')
    }

    insert(entity: ClienteModel): Observable<ClienteModel> {
        return this.http.post<ClienteModel>(this.resourceUrl, entity);
    }

    update(entity: ClienteModel): Observable<ClienteModel> {
        return this.http.put<ClienteModel>(this.resourceUrl, entity);
    }

    delete(id: number): Observable<ClienteModel> {
        return this.http.delete<ClienteModel>(this.resourceUrl + '/' + id);
    }
}
