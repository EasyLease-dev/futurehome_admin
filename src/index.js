import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Existing global styles (if any)
import './styles.css'; // Import the new styles.css file
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
