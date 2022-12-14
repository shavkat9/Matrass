import './App.css';
import Pages from './Pages/Pages';
import Form from './components/Form/Form';
import Main from './components/Main/Main';
import Category from './components/Category/Category';
import Section from './components/Section/Section';
import HeroMain from './components/HeroMain/HeroMain';
import Side from './components/Side/Side';
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="App">
    < Pages />
    < Form />
    < Main />
    < Category />
    < Section />
    < HeroMain />
    < Side />
    < Footer />
    </div>
  );
}

export default App;
