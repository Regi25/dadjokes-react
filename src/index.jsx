import React from 'react';
import { createRoot } from 'react-dom/client';
import { jokes } from './jokes.js';
import { Joke } from './Joke/joke';
import './style.css';

const App = () => {
  // const [upLikes, setUpLikes] = useState(0);
  // const [downLikes, setDownLikes] = useState(0);

  // const randJoke = jokes[Math.floor(Math.random() * (jokes.length - 1))];

  return (
    <div className="container">
             
      {jokes.map((joke) => (
        <Joke
          key={joke.id}
          userName={joke.name}
          userAvatar={joke.avatar}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
