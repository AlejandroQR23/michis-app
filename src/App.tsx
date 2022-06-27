import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/header.component';
import { AuthContext } from './context/auth.context';
import Homepage from './pages/Homepage/homepage.component';
import Login from './pages/Login/login.component';
import MichiDetails from './pages/MichiDetails/michi-details.component';
import NewMichi from './pages/NewMichi/new-michi.component';

const App = () => {
  const [token, setToken] = useState<string | undefined>(undefined);
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  });
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="login" element={<Login />} />
              <Route path="/">
                <Route path="new-michi" element={<NewMichi />} />
                <Route path=":id" element={<MichiDetails />} />
                <Route index element={<Homepage />} />
              </Route>
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
};

export default App;
