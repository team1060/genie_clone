import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import Swiper1 from './components/main/Swiper1';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Swiper1></Swiper1>
      <hr></hr>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
