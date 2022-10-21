import { Route, Routes, BrowserRouter  } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HabitsPage from './pages/HabitsPage';
import TodayPage from './pages/TodayPage';
import HistoryPage from './pages/HistoryPage';
import { UserContext } from './Contexts/UserContext';
import React from 'react';

function App() {

  const [user, setUser] = React.useState({})

  return (
    <BrowserRouter>
    <UserContext.Provider value={{user: user, setUser: setUser}}>
      <Routes>
          <Route path='/' element={<LoginPage />}/>
          <Route path='/cadastro' element={<RegisterPage />}/>
          <Route path='/habitos' element={<HabitsPage />}/>
          <Route path='/hoje' element={<TodayPage />}/>
          <Route path='/historico' element={<HistoryPage />}/>
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
