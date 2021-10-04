import Browse from './pages/Browse';
import { NavbarScrollContextProvider } from './context/NavbarScrollContext';

import { GlobalStyles } from './styles/global';

function App() {
  return (
    <>
      <NavbarScrollContextProvider>
        <GlobalStyles />
        <Browse />
      </NavbarScrollContextProvider>
    </>
  );
}

export default App;
