import React from 'react';
import ReactDOM from 'react-dom';
import Game from '/components/game.jsx';

window.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(<Game/>, document.querySelector('.root'));
})
