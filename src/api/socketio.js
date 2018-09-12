import io from 'socket.io-client';

import store from './../store';
import { setLiveData } from './../actions';

const socket = io('http://kaboom.rksv.net/socket.io');
const watcher = io("http://kaboom.rksv.net/watch");

let state = 1;

export function initSocketioConnection (cb) {
  console.log("Initializing sniper Apis...");
  watchSocketEvents(watcher);
  if(cb && typeof cb === 'function')cb();
}

export function subscribe () {
  state = 1
  console.log('subscribe');
  watcher.emit('sub', {state: true});
}

export function unSubscribe (cb) {
  state = 0
  console.log('unSubscribe')
  watcher.emit('unsub', {state: false});
}

function passData (data, callback) {
  return function (dispatch) {
    callback(state);
    store.dispatch(setLiveData(data.split(',')));
  }
}

function watchSocketEvents(watcher){
  watcher.on("connect", function() {
      console.log('connected');
  });
  watcher.on("error", function(n) {
      console.log('error in socket.io connection', n);
  });
  watcher.on("data", function(n, i){
    passData(n, i)()
  })
}
