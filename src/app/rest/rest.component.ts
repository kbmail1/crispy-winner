import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { EMPTY, pipe, interval, lastValueFrom, timeout } from 'rxjs';
import { retry, catchError, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.scss']
})
export class RestComponent implements OnInit {

  url: string = `https://api.dictionaryapi.dev/api/v2/entries/en/sit`
  data: any = {}

  constructor(
    private http: HttpClient,
  ) { }


  result = ''
  ngOnInit = () => {
  }

  onClick = async () => {
    console.log('observable/subscribe: onlick 1')
    let obs$ = await this.http.get(this.url)
      .pipe(
        retry(2),
        catchError(() => {
          return EMPTY
        }),
        shareReplay()
      )
    obs$.subscribe(result => {
      console.log(result)
    })
  }
  onClickPromise = async () => {
    console.log('Promises: onlick 1')
    let obs$ = await this.http.get(this.url)
    console.log(`Promises: onlick 2 - this can be dangerous if we do NOT know 
    that observable is 'resolvable'. If so, promise will just hang in async state...`)
    let prom = await lastValueFrom(obs$)

    console.log('prom type: ', typeof prom)
    console.log('Promises: onlick 3')
    // console.log('Type of Prom: ', JSON.stringify(prom))
  }
}
