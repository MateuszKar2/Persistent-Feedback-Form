
//instaluje biblioteki 'lodash.throttle' i '@vimeo/player'
//deklaruje zmienną playerCurrentTime która odpowiada za aktualny czas video
//do zmiennej iframe pobieram poprzez id video
//zmienną player nawiązuje do sekcji pre-existing player w bibliotece
 

import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const playerCurrentTime = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const pauseTime = e => {
  localStorage.setItem(playerCurrentTime, e.seconds);
};

player.on('timeupdate', throttle(pauseTime, 1000));

player
  .setCurrentTime(JSON.parse(localStorage.getItem(playerCurrentTime)) || 0)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
