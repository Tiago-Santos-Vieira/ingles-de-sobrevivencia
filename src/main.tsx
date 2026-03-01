import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import ApiKeyGuard from './components/ApiKeyGuard.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApiKeyGuard>
      <App />
    </ApiKeyGuard>
  </StrictMode>,
);
