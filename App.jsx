import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ShowTabel from "../components/Card";
import Riwayat from "../components/Riwayat";
import Nav from "../components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <div style={{ margin: "50px" }}>
        <Header />
        <Main />
        <Riwayat />
        <Card />
        <Footer />
      </div>
    </div>
  );
}

export default App;
