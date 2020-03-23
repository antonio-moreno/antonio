import Bootloader from './bootloader.js';
import Play from './scenes/play.js';
import UI from './scenes/UI.js';
import Menu from './scenes/menu.js';
import Gameover from './scenes/gameover.js';
const config = {
     title: 'Nebula',
     width: 320,
     height: 180,
     type: Phaser.AUTO,
     parent: 'container',
     backgroundColor : '#f9ca24',
     pixelArt: true,
     physics: {
          default: "arcade",
          //arcade: {
            //   gravity: {y:100}
        //  }
     },
     scene: [Bootloader, Play,Gameover,Menu,UI]
 };

 new Phaser.Game(config);