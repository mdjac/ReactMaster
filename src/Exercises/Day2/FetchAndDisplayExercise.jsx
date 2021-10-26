import React, {useState, useEffect} from 'react';

export const FetchAndDisplay = () => {
    const [joke, setJoke] = useState("");
    const [autojoke, setautoJoke] = useState("");




    const fetchJoke = () => {
        fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => setJoke(data.value));
    }

    function makeOptions(method) {
        var opts =  {
          method: method,
          headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
          }
        }
        return opts;
       }


    const getAutoJoke = () => {
        const options = makeOptions("GET");
        fetch('https://icanhazdadjoke.com/',options)
        .then(response => response.json())
        .then(data => {
            setautoJoke(data.joke);
            console.log(data.joke);
        });
    }

    useEffect(() => {
        const timerId = setInterval(getAutoJoke, 10000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, []);


    return (
    <div>
        <p>Your joke is here: {joke}</p>
        <button onClick={fetchJoke}>
            Fetch joke
        </button>
        <p>Your auto joke is here: {autojoke}</p>
    </div>
    );
}