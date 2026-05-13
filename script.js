const { useState } = React;

const colors = [
  "#16a085", "#27ae60", "#2c3e50", "#f39c12",
  "#e74c3c", "#9b59b6", "#FB6964", "#342224",
  "#472E32", "#BDBB99", "#77B1A9", "#73A857"
];

const quotes = [
  { text: "Hidup-hidupilah Muhammadiyah, jangan mencari hidup di Muhammadiyah.", author: "KH. Ahmad Dahlan" },
  { text: "Seorang muslim harus menjadi rahmat bagi seluruh alam.", author: "KH. Mas Mansur" },
  { text: "Ilmu tanpa amal bagaikan pohon tanpa buah.", author: "KH. Fakhruddin" },
  { text: "Amal usaha adalah bukti nyata iman.", author: "Buya Hamka" },
  { text: "Muhammadiyah berdiri untuk memajukan dan mencerahkan umat.", author: "Prof. Dr. Haedar Nashir" }
];

function App() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [color, setColor] = useState(getRandomColor());

  function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function handleNewQuote() {
    setQuote(getRandomQuote());
    setColor(getRandomColor());
  }

  // 🔹 Copy to Clipboard
  function copyQuote() {
    navigator.clipboard.writeText(`"${quote.text}" - ${quote.author}`);
    alert("Quote copied! Paste di Instagram/TikTok.");
  }

  const appStyle = {
    backgroundColor: color,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "background-color 1s ease"
  };

  const textStyle = { color: color, transition: "color 1s ease" };

  return (
    <div style={appStyle}>
      <div id="quote-box" style={{ color: color }}>
        <p id="text" style={textStyle}>"{quote.text}"</p>
        <p id="author" style={textStyle}>- {quote.author}</p>
        <div>
          <a id="tweet-quote"
             href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
             target="_blank"
             rel="noopener noreferrer"
             style={{ backgroundColor: color }}>
            <i className="fa-brands fa-x-twitter"></i>
          </a>

          <a id="fb-share"
             href={`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
             target="_blank"
             rel="noopener noreferrer"
             style={{ backgroundColor: color }}>
            <i className="fa-brands fa-facebook"></i>
          </a>

          <a id="wa-share"
             href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
             target="_blank"
             rel="noopener noreferrer"
             style={{ backgroundColor: color }}>
            <i className="fa-brands fa-whatsapp"></i>
          </a>

          <button id="copy-quote" onClick={copyQuote} style={{ backgroundColor: color }}>
            <i className="fa-solid fa-copy"></i>
          </button>

          <button id="new-quote" onClick={handleNewQuote} style={{ backgroundColor: color }}>
            New Quote
          </button>
        </div>
      </div>
      <footer>by Nova Cipta F</footer>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
