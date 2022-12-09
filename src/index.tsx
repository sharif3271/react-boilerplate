import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import './assets/style/style.css';
import { AppRoutes } from './routes/Routes';
import { store, persistor } from 'store/config/persistor';
import { ToastProvider } from 'src/utils/toast';
import { BrowserRouter } from 'react-router-dom';

function Root() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={undefined} persistor={persistor}>
          <ToastProvider>
            <AppRoutes />
          </ToastProvider>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}
ReactDOM.render(<Root />, document.getElementById('root'));
