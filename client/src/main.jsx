
import { createRoot } from 'react-dom/client';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App.jsx';
import {Provider} from 'react-redux';
import store from './store/store';
import { Toaster } from './components/components/ui/toaster';

createRoot(document.getElementById('root')).render(
  <BrowserRouter> 
  <Provider store ={store}>

  <App />
  <Toaster />
  </Provider>
  
  </BrowserRouter>
  
 
);
