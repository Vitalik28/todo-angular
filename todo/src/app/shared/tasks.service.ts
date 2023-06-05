import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";


export interface Task {
    id?: string
    title: string
    date?: string
}

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    static url = 'https://angular-practice-calenda-34572-default-rtdb.asia-southeast1.firebasedatabase.app/'

    constructor(private http: HttpClient ) {

    }

    create (task: Task): Observable<Task> {
        return this.http.post<any>(`${TasksService.url}/${task.date}.json`, task)
        .pipe(map(res => {
            return res
        }))
    }
}