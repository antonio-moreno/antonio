class UI extends Phaser.Scene {
    constructor() {
        super('UI');
    }
     preload() {
      console.log('Soy UI');
    }
    create() {
      this.add.image(0, 0, 'tablero').setOrigin(0);
    }
  }
  
  export default UI;