import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/Index';
import Old from './pages/Old';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Index} exact />
      <Route path="/old" component={Old} exact />
    </BrowserRouter>
  );
}

export default App;
