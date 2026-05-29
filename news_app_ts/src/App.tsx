import Header from "./components/Header/Header.jsx";
import Main from "./pages/main/Main";

function App() {
  let num: number = 3;
  num = "s";

  return (
    <>
      <Header />
      <div className="container">
        <Main />
      </div>
    </>
  );
}

export default App;
