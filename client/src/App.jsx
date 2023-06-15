import './App.css';
import WriteAnswer from './components/answer/WriteAnswer';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Sidebar from "./components/sidebar/sidebar"
import LoginBox from "./components/loginbox/Loginbox"

function App() {
  return (
    <>
      <Header/>
      <Sidebar/>
      <WriteAnswer />
      <Footer />
    </>
  );
}

export default App;
