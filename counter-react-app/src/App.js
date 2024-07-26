import Counter from './components/Counter';
import Header from  './components/Header';
import Userprofile from './components/UserProfile';
import auth from './store/auth';
import Auth from './components/Auth'
import { useSelector } from 'react-redux';

function App() {

  const isAuthenticated = useSelector( state => state.auth.isAuthenticated );

  return (
    <>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <Userprofile />}
      <Counter />
    </>
  );
}

export default App;
