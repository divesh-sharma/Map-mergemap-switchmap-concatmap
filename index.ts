import './style.css';

import { of, map, from, delay, switchAll, switchMap, concatMap, mergeAll, mergeMap } from 'rxjs';

from([1,2])
  .pipe(map(name => `Hello, ${name}!`))
  .subscribe(console.log);

  from(['A','B','C','D']);
  from([1,2,3,4])

  const getData = (param) => {
    return of(`retrieved new data with param ${param}`).pipe(
      delay(1000)
    )
  }
  
  // using a regular map
  from([1,2,3,4]).pipe(
    map(param => getData(param))
  ).subscribe(val => val.subscribe(data => console.log(data)));
  

  // using map and mergeAll
from([1,2,3,4]).pipe(
  map(param => getData(param)),
  mergeAll()
).subscribe(val => console.log(val,"map and mergeAll"));

// using mergeMap
from([1,2,3,4]).pipe(
  mergeMap(param => getData(param))
).subscribe(val => console.log(val,'mergeMap'));

  // using map and switchAll
  from([1,2,3,4]).pipe(
    map(param => getData(param)),
    switchAll()
  ).subscribe(val => console.log(val,"map and switchAll"));
  
  // using switchMap
  from([1,2,3,4]).pipe(
    switchMap(param => getData(param))
  ).subscribe(val => console.log(val,"switchMap"));

  // using concatMap
from([1, 2, 3 ,4]).pipe(
  concatMap(param => getData(param))
).subscribe(val => console.log('concatMap:', val));
  

// Open the console in the bottom right to see results.
