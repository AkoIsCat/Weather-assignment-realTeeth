import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter } from 'react-router-dom';
import { MainPage } from '../pages/mainPage';
import { SkeletonTheme } from 'react-loading-skeleton';

const client = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <SkeletonTheme baseColor="#e0e0e0" highlightColor="#f5f5f5">
            <MainPage />
          </SkeletonTheme>
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
