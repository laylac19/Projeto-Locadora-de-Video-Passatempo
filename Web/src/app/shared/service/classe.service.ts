import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ClasseModel} from "../../model/classe.model";
import {ClasseListModel} from "../../model/classe-list.model";

@Injectable({
    providedIn: 'root'
})
export class ClasseService {

    constructor(private http: HttpClient) {
    }

    resourceUrl = environment.apiUrl + '/classes';

    findById(id: number): Observable<ClasseModel> {
        return this.http.get<ClasseModel>(this.resourceUrl + '/' + id);
    }

    findAll(): Observable<ClasseListModel[]> {
        return this.http.get<ClasseListModel[]>(this.resourceUrl);
    }

    insert(entity: ClasseModel): Observable<ClasseModel> {
        return this.http.post<ClasseModel>(this.resourceUrl, entity);
    }

    update(entity: ClasseModel): Observable<ClasseModel> {
        return this.http.put<ClasseModel>(this.resourceUrl, entity);
    }

    delete(id: number): Observable<ClasseModel> {
        return this.http.delete<ClasseModel>(this.resourceUrl + '/' + id);
    }
}
