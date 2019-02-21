import { mergeMap, map, catchError, tap, switchMap  } from "rxjs/operators";
import { of, throwError, Observable, forkJoin } from "rxjs";
import { fetch } from 'whatwg-fetch';


export const  moviesHasErrored = (hasErrored)=>({type : "ITEMS_HAS_ERRORED", hasErrored })
export const moviesAreLoading = (isLoading)=>({type : "ITEMS_IS_LOADING", isLoading })
export const movieFetchDataSuccess = (items) =>({type : "ITEMS_FETCH_DATA_SUCCESS", items})

const fetchToObservable = (url)=>{
    return Observable.create(observer => {
        fetch(url)
          .then(response => response.json()) // or text() or blob() etc.
          .then(data => {
            observer.next(data);
            observer.complete();
          })
          .catch(err => observer.error(err));
      });
}

export function moviesFetchData(url){
    return (dispatch) =>{
        dispatch(moviesAreLoading(true));
        fetchToObservable(url)
        .pipe(map(x=>x.films), mergeMap(urls =>{
            const requests = urls.map(x => fetchToObservable(x));
            return forkJoin(requests).pipe(map((results)=> results.map(x=>{
                return {
                  ...x,
                  release_date : new Date(x.release_date)
                }
              }) ))
        }))
        .subscribe(
            (films) =>{
                dispatch(moviesAreLoading(false));
                dispatch(moviesHasErrored(false));
                dispatch(movieFetchDataSuccess(films))


            },
            err => dispatch(moviesHasErrored(true))
        )
    }
}


/*
dispatch(itemsIsLoading(true));
        fetch(url)
        .then(
            (response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(itemsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
*/ 