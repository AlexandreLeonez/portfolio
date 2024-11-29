import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Portfolio from './pages/Portfolio';
import Contato from './pages/contato';
import NotFound from './pages/NotFound';
import './assets/styles/Portfolio.css';
import './assets/styles/home.css';
import './assets/styles/contato.css';
import './assets/styles/app.css';
function App() {
  return (
    <Router>
      <main>
        <Routes>
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/" element={<Home />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <header>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/Portfolio">Portfólio</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
        </nav>
      </header>
      <footer>© 2023 Meu Portfólio. Todos os direitos reservados.</footer>
    </Router>
  );
  
}

export default App;
