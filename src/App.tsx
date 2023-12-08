import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { ChakraProvider } from '@chakra-ui/react';
import { AppContextProvider } from './components/AppContext';
import MainRoutes from './routes';
import { createdLocalStorage, getAllLocalStorage } from './services/storage';

function App() {
  // Em vez disso 
  // if(!getAllLocalStorage()) {
  //   createdLocalStorage()
  // }
  // Usamos Isso 
  !getAllLocalStorage() && createdLocalStorage()

  return (
    <>
      <BrowserRouter>
        <AppContextProvider>
          <ChakraProvider>
            <Layout>
              <MainRoutes />
            </Layout>
          </ChakraProvider>
        </AppContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
