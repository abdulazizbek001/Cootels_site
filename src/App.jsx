import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Hero2 from './components/Hero2/Hero2';
import Info from './components/Info/Info';
import Info2 from './components/Info2/Info2';
import Choose from './components/Choose/Choose';
import Room from './components/Room/Room';
import Footer from './components/Footer/Footer';
import From from './components/From/From';

function App() {

  return (
    <>

      <Header />
      <div className="container">
        <Hero />
        <Hero2 />
        <Info />
        <Info2 />
        <Choose />
        <Room />
        <From />
      </div>
      <Footer />

    </>
  )

}

export default App