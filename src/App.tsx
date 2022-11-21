import React from 'react';
import { RouterProvider } from "react-router-dom";
import Router from './router/router'
import {ThemeProvider} from '@mui/material';
import {theme} from "./theme/theme";
import {Provider} from 'react-redux'
import {store} from "./redux/store";
function App() {
  return (
      <Provider store={store}>
      <ThemeProvider theme={theme}>
<RouterProvider router={Router}/>
      </ThemeProvider>
      </Provider>
  );
}

export default App;
