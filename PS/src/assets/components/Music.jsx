import React from 'react';
import { Link } from 'react-router-dom';
import './Music.css';

const Music = () => {
  return (
    <>
      <div className="music-container">
        <img src="https://scontent-fra5-2.xx.fbcdn.net/v/t39.30808-6/311872584_10160241852224731_2063002137831321654_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=3635dc&_nc_ohc=osQ1uwFGgJ8AX8T-eRL&_nc_ht=scontent-fra5-2.xx&oh=00_AfCKApg-mTdiH1vBqrdqfW_Sk7_pLPD6fHNuGX5PrEnDdQ&oe=65E70207" alt="" />
        <div className="text-overlay">
          <h1>MUSIC</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugiat nemo doloribus quae exercitationem, dolor optio tempora perspiciatis vel itaque officiis facere neque suscipit. Saepe sunt expedita quod voluptas hic.
            Ab error veniam accusantium quibusdam quam cupiditate laboriosam? Laboriosam dolore animi ea eaque ut quibusdam possimus error impedit, sunt asperiores. A necessitatibus dolores repellendus magni culpa tempore ipsum rem hic?
          </p>
          <Link to="/"><button>back</button></Link>
        </div>
      </div>
    </>
  );
};

export default Music;