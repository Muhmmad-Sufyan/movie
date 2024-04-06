import './App.scss'
import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components';

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="container">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
