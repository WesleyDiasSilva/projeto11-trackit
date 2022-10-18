import { Route, Routes, BrowserRouter  } from 'react-router-dom'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HabitsPage from './pages/HabitsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />}/>
        <Route path='/cadastro' element={<RegisterPage />}/>
        <Route path='/habitos' element={<HabitsPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
