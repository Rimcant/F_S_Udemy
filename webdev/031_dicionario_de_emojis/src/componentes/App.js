import React from "react";
import CartaoEmoji from './cartaoemoji'
import emojipedia from './emojipedia'

function criarCartaoEmoji(emoji) {
  return <CartaoEmoji
  key={emoji.id}
  emoji={emoji.emoji}
  name={emoji.name}
  meaning={emoji.meaning} />
}

function App() {
  return (
    <div>

      <h3>
        ola
      </h3>
      <h2>
        {emojipedia.filter(function (string) {
          return string.meaning.length > 20
        }).map(function (string) {
        return <p>{string.meaning.substring(0,100)}</p>
        })}
      </h2>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map((emoji) =>
        <CartaoEmoji
          key={emoji.id}
          emoji={emoji.emoji}
          name={emoji.name}
          meaning={emoji.meaning}
          
        />
      )}
    </div>
  );
}

export default App;
