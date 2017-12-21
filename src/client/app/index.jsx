import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Rx from 'rxjs/Rx';


class App extends React.Component {
  render () {
    return <p> Hello React World</p>;
  }
}

render(<App/>, document.getElementById('app'));


let clicks = Rx.Observable.fromEvent(document,'click');

clicks.switchMap( click => {
	return Rx.Observable.interval(500)
})
.subscribe( i => print(i))

function print(v){
	let el = document.createElement("p");
	el.innerText = v;
	document.body.appendChild(el);
}
