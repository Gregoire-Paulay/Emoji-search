import { useState } from "react";
import data from "./assets/data.json";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <header>
        <h1>🤫 Emoji Search 🤫</h1>
        <input
          value={search}
          type="text"
          onChange={(event) => {
            setSearch(event.target.value);
            data.map((emoji) => {
              // console.log(emoji.keywords);
            });
          }}
        />
      </header>
      <main>
        {data.map((emoji) => {
          return (
            <div key={emoji.keywords}>
              <button>
                <p>{emoji.title} </p>
                <p>{emoji.symbol}</p>
              </button>
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default App;
