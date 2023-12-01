import './App.css';
import { About, Contacts, Footer, Header, Services, WhyChooseUs } from './containers';
import { Navbar } from './components'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar/>
        <Header/>
      </div>
      <About/>
      <WhyChooseUs/>
      <Services/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
