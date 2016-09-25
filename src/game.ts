import {BootState} from './state/boot';

export class Game extends Phaser.Game {
    constructor() {
        super(480, 800, Phaser.CANVAS, '');

        this.state.add('boot', BootState);

        this.state.start('boot');
    }
}
