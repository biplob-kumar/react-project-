
import './App.css';
import Banner from './Components/banner/Banner';
import Demo from './Components/banner/demosection/Demo';
import Feature from './Components/banner/featureSection/Feature';
import Support from './Components/banner/Support-section/Support';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
  <Banner/>
  <Demo/>
  <Feature/>
  <Support/>
  <Footer/>
    </div>
  );
}

export default App;
