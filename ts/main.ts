///<reference path="lib/pixi.js.d.ts"/>

import text from './kok.js';

document.addEventListener('DOMContentLoaded', main);

async function main() {
    const renderer = PIXI.autoDetectRenderer();
    console.log(text);
}
