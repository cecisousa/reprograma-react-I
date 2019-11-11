import React from 'react';
import Card from './componentes/Card'
import cat1 from './img/cat1.png';
import cat2 from './img/cat2.jpg';
import cat3 from './img/cat3.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Card
        src = {cat1}
        autor = "Cecilia"
        titulo = "Amo gatos!"
        comentario = "Ask to be pet then attack owners hand. Stuff and things loves cheeseburgers but always ensure to lay down in such a manner that tail can lightly brush human's nose. Lies down find empty spot in cupboard and sleep all day i'm bored inside, let me out i'm lonely outside, let me in i can't make up my mind whether to go in or out, take a few bites of food and continue meowing mouse."
      />
        <Card
        src = {cat2}
        autor = "Patricia"
        titulo = "Gatos vão dominar o mundo!"
        comentario = "Cats go for world domination scratch me there, elevator butt claw at curtains stretch and yawn nibble on tuna ignore human bite human hand. Always hungry meoooow. Find box a little too small and curl up with fur hanging out chase dog then run away stare out cat door then go back inside there's a forty year old lady there let us feast. Poop on floor and watch human clean up this cat happen now, it was too purr-fect!!!"
      />
      <Card
        src = {cat3}
        autor = "Silvia"
        titulo = "Gato: o melhor amigo do homem - e da mulher!"
        comentario = "Meowing chowing and wowing run off table persian cat jump eat fish. Howl on top of tall thing attack the dog then pretend like nothing happened. Intently sniff hand what the heck just happened, something feels fishy sit by the fire cough hairball on conveniently placed pants. Massacre a bird in the living room."
      />
    </div>
  );
}

export default App;
