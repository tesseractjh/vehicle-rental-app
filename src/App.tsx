import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient } from '@tanstack/react-query';
import Main from './pages/Main';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
