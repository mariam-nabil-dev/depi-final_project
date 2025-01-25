import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import Aboutfirst from '../../components/Aboutsections/Aboutfirst.jsx';
import Aboutsections from '../../components/Aboutsections/Aboutsections.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <Aboutfirst/>
    <Aboutsections />
  </StrictMode>,
)
