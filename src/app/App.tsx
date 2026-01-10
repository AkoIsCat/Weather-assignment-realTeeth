import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MainPage } from '../pages/mainPage';

const client = new QueryClient();

function App() {
  return (
    <div>
      <QueryClientProvider client={client}>
        <MainPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
