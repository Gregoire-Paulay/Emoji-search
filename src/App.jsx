import { useState } from "react";
import data from "./assets/data.json";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  const [search, setSearch] = useState("");

  const emojiSelection = [];
  for (let i = 0; i < data.length; i++) {
    const emoji = data[i];
    if (emojiSelection.length < 20) {
      if (emoji.keywords.includes(search)) {
        emojiSelection.push(
          <button
            key={emoji.title}
            onClick={() => {
              navigator.clipboard.writeText(emoji.symbol);
            }}
          >
            {emoji.symbol} {emoji.title}
          </button>
        );
      }
    } else {
      break;
    }
  }

  return (
    <>
      <h1>🤫 Emoji Search 🤫</h1>
      <input
        type="text"
        placeholder="Which emoji are you looking for ?"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <div className="container">{emojiSelection}</div>

      <Footer />
    </>
  );
};

export default App;
