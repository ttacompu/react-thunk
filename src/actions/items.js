import { mergeMap, map, catchError, tap, switchMap } from "rxjs/operators";
import { of, throwError, Observable } from "rxjs";

export const  itemsHasErrored = (hasErrored)=>({type : "ITEMS_HAS_ERRORED", hasErrored })
export const itemsIsLoading = (isLoading)=>({type : "ITEMS_IS_LOADING", isLoading })
export const itemsFetchDataSuccess = (items) =>({type : "ITEMS_FETCH_DATA_SUCCESS", items})

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

export function itemsFetchData(url){
    return (dispatch) =>{
        dispatch(itemsIsLoading(true));
        fetchToObservable(url).subscribe(
            ({films}) =>{
                dispatch(itemsIsLoading(false));
                dispatch(itemsFetchDataSuccess(films))

            },
            err => dispatch(itemsHasErrored(true))
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