import React from 'react';
import { BrowserRouter as Router,
  Routes as RouterCover,
  Route, } from 'react-router-dom';
import Page from '../pages/pages';



export const Routes = () => {
  return (
    <Router>
      <RouterCover>
        <Route path='/home' element={< Page />} />
      </RouterCover>
    </Router>

  );
};
export default Routes;