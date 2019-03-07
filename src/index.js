import React from 'react';
import { render } from 'react-dom';
import { Observable } from 'rxjs'
import * as o from 'rxjs/operators'
import './styles/style.css';
import App from './components/App';

const anObservable = Observable.create((observer) => {
  console.log('hello, rxjs')
  observer.complete()
})

anObservable.subscribe()

render(<App/>, document.querySelector('#root'));