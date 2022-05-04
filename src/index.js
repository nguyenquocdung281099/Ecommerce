import React , {Suspense} from  'react';
import ReactDOM from 'react-dom';
import App from './container/App/App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import store from "./redux/store";


ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={(<div>Loading...........</div>)} >
      <Provider  store = {store} >
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
