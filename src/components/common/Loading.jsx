import React from 'react';

const letters = ['T', 'И', 'Г', 'Р', 'О', 'Л', 'О', 'В', 'И'];

const Loading = () => {
  return (
    <div className="loadingWrapper">
      <div className="loading loadingWithEffect">
        {letters.map((letter, index) => (
          <span key={index}>{letter}</span>
        ))}
      </div>
    </div>
  );
};

export default Loading;
