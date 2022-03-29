import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ShowTabel from "../components/Card";
import Riwayat from "../components/Riwayat";
import Nav from "../components/Nav";
import ReactState from "../components/Reactstate";

const daftarAnggota = [
  { gambar: "../img/cowok.png", title: "Kamiran", content: "Alamat : Ketapang" },
  { gambar: "../img/cowok.png", title: "Mukidi", content: "Alamat : Gentang" },
  { gambar: "../img/cowok.png", title: "Nurdin", content: "Alamat : Panderejo" },
  { gambar: "../img/cowok.png", title: "Ketut Suardana", content: "Alamat : Gilimanuk" },
  { gambar: "../img/cowok.png", title: "Galang", content: "Alamat : Ketapang" },
  { gambar: "../img/cowok.png", title: "Rudi Agus", content: "Alamat : Situbondo" },
  { gambar: "../img/cowok.png", title: "Karmila", content: "Alamat : Surabaya" },
  { gambar: "../img/cowok.png", title: "Harif", content: "Alamat : Bondowoso" },
];

function App() {
  return (
    <div>
      <Nav />
      <div className="container">
        <div className="row">
          {daftarAnggota.map((agt, indeks) => (
            <div className="col-lg-3 col-md-4 col-sm-6">
              <Card gambar={agt.gambar} title={agt.title} content={agt.content} />
            </div>
          ))}
        </div>
      </div>
      <hr />
      <ReactState />
    </div>
  );
}

export default App;
