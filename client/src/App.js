import { useEffect, useState } from 'react';
import './App.css';
import { IconMediaPlay, IconLeftArrow, IconRightArrow } from './Playbutton';
import axios from 'axios';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carousel, setCarousel] = useState([]);

  const fetchData = async () => {
    const res = await axios.get('/api/');

    setCarousel(res.data);
    console.log(res.data);
  };

  const updateNext = () => {
    setCurrentIndex(currentIndex + 1);
    if (currentIndex >= 2) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const updatePrevious = () => {
    if (currentIndex === 0) {
      setCurrentIndex(2);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="main-section">
      <img src={carousel[currentIndex]?.imageURL} className="main-img" />
      <div className="top-section">
        <h1 className="top-heading">{carousel[currentIndex]?.heading}</h1>
        <p className="top-para">{carousel[currentIndex]?.subHeading}</p>
      </div>

      <div className="middle-section">
        <button className="button">Learn More</button>
        <div className="icon-div">
          <IconMediaPlay />
        </div>
        <p className="middle-para">Watch Video</p>
      </div>

      <div className="lower-section">
        <div className="slide-show">
          <span className="slide-num">0{currentIndex + 1}</span>
          <div className="slide-bar">
            {currentIndex === 0 && <div className="slide-bar-filled-1"></div>}
            {currentIndex === 1 && <div className="slide-bar-filled-2"></div>}
            {currentIndex === 2 && <div className="slide-bar-filled-3"></div>}
          </div>
        </div>

        <div className="slide-buttons">
          <button className="btn-1" onClick={updatePrevious}>
            <IconLeftArrow />
          </button>
          <button className="btn-2" onClick={updateNext}>
            <IconRightArrow />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
