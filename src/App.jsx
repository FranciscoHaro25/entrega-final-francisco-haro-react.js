import Elemento from "./components/Elemento";
import Elemento2 from "./components/Elemento2";
import ItemListContainer from "./components/page/itemListContainer/ItemListContainer";
// import logo from "./assets/image/logo.png";

const App = () => {
  return (
    <div>
      <div className="bg-red-500 text-white p-4 text-center">
        <h1>¡Tailwind funciona!</h1>
      </div>
      {/* <Elemento2 /> */}
      {/* <img src={logo} alt="Logo" />
      <img
        src="https://e7.pngegg.com/pngimages/377/34/png-clipart-runes-logo-black.png"
        alt=""
      />
      <img
        src="https://res.cloudinary.com/dgvwjlnns/image/upload/v1752877946/diseno-logotipo-degradado-colorido-letra_474888-2309_entk8x.jpg"
        alt=""
      /> */}
      {/* <Elemento /> */}
      <ItemListContainer />
    </div>
  );
};

export default App;
