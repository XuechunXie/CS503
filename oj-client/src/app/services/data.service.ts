import { Injectable } from '@angular/core';
import { Problem } from '../models/problem.model';
import { PROBLEMS } from '../mock-problem';
import { Http, Response, Headers} from '@angular/http';
import {addItemsToRouteProperties} from '@angular/cli/lib/ast-tools';
import {toPromise} from 'rxjs/operator/toPromise';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
  /**problems: Problem[] = PROBLEMS;*/
  private problemsSource = new BehaviorSubject<Problem[]>([]);
  constructor(private http: Http) { }
  getProblems(): Observable<Problem[]> {
    /**return this.problems;*/
    this.http.get('api/v1/problems')
      .toPromise()
      .then((res: Response) => {
        this.problemsSource.next(res.json());
      })
    .catch(this.handleError);
    return this.problemsSource.asObservable();
  }
  getProblem(id: number): Promise<Problem> {
    /**return this.problems.find((problem) => problem.id === id);*/
    return this.http.get('api/v1/problems/${id}')
      .toPromise()
      .then((res: Response) => res.json())
      .catch(this.handleError);
  }
  addProblem(problem: Problem): Promise<Problem> {
    /*
    problem.id = this.problems.length + 1;
    this.problems.push(problem);*/
    let headers = new Headers({ 'content-type': 'application/json'});
    return this.http.post('/api/v1/problems', problem, headers)
    .toPromise()
    .then((res: Response) => {
      this.getProblems();
      return res.json();
    })
    .catch(this.handleError);
  }
  // error handler
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.body || error);
  }
}
