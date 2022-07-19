import Header from "./Components/Header/Header";
import './App.scss';
import Banner from "./Components/Banner/Banner";
import Main_content from "./Components/Main/Main_content";
import Footer from './Components/Footer/FMain'

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Main_content />
      <Footer />
    </div>
  );
}

export default App;
