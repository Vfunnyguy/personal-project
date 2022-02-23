import React,{useState,useEffect} from 'react'

const Joke = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
  useEffect(() => {
    getJoke()
  }, []);

  const getJoke = () => {
    var url = `https://gist.githubusercontent.com/Vfunnyguy/bf1302405d6812ecb0323476193b5e4b/raw/04cfe4f1ef2be85cb33696db90678ccb24d4ec09/jokes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataJokes = data.jokes;
        let randomNum = Math.floor(Math.random() * dataJokes.length);
        let randomJokes = dataJokes[randomNum];
        setTitle(randomJokes.title);
        setContent(randomJokes.content);
      })
  }

  const handleRandom = () => {
    getJoke();
  }

  return (
    <div id="joke_component">

        <div className="card">
            <div className="card_item">
                <h2 className="title text-center">
                    {title}
                </h2>
                <p className="content">{content}</p>
            </div>
        </div>
        <div className="button">
            <div className="like_btn bold" onClick={handleRandom}>This is Funny !</div>
            <div className="unlike_btn bold" onClick={handleRandom}> This is not Funny</div>
        </div>
        
    </div>

  
    
  )
}

export default Joke