import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/mainPage';

const client = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
