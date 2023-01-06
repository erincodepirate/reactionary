import React, { useRef, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Alert } from 'react-native';
import Canvas from 'react-native-canvas';

interface renderObj {
  key: string,
  value: string
}

interface gameSquare {
  type: string,
  present: string,
}

let board: gameSquare[][] = [
  [{ type: 'tile', present: 'none' }, { type: 'tile', present: 'none' }, { type: 'tile', present: 'none' }, { type: 'tile', present: 'none' },],
  [{ type: 'tile', present: 'none' }, { type: 'tile', present: 'none' }, { type: 'tile', present: 'none' }, { type: 'tile', present: 'none' },],
  [{ type: 'tile', present: 'none' }, { type: 'tile', present: 'hero' }, { type: 'tile', present: 'none' }, { type: 'tile', present: 'none' },],
  [{ type: 'tile', present: 'none' }, { type: 'tile', present: 'none' }, { type: 'tile', present: 'none' }, { type: 'tile', present: 'none' },],
]

export default function App() {
  const d = 64;
  let heroImage = new Image(d,d);
  heroImage.src = require('./img/johnbrown.png');
  let tileImage = new Image(d,d);
  tileImage.src = require('./img/marble-tile.png');

  let ctx;
  var activateDraw = (ref: HTMLCanvasElement) => {
    console.log('this is the canvas DOM element you want', ref)

    /*ctx.fillStyle = 'red';
    ctx.fillRect(20, 20, 100, 100);*/
    // draw stuff

    tileImage.addEventListener('load', () => {
        drawImage(tileImage, ref, {key:'type', value: 'tile'});
    });

    heroImage.addEventListener('load', () => {
      drawImage(heroImage, ref, {key:'present', value: 'hero'});
    });

    /*let x = 0;
    let y = 0;

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j< board[i].length; j++) {
        let square = board[i][j];
        if (square.type == 'tile'){
          
        }
        if (square.present == 'hero'){

        }
        x += 64;
      }
      y += 64;
    }*/
  }

  function drawImage(img: HTMLImageElement, ref: HTMLCanvasElement, render: renderObj) {
      const ctx = ref.getContext('2d')
      if (ctx) {
        let x = 0;
        let y = 0;
        for (let i = 0; i < board.length; i++) {
          x= 0;
          for (let j = 0; j < board[i].length; j++) {
            let square = board[i][j];
            if (square[render.key as keyof gameSquare] == render.value) {
              console.log(img);
              ctx.drawImage(img, x, y);
            }
            x += 64;
          }
          y += 64;
        }
  }
}

var activateCanvas = (<canvas ref={(e: HTMLCanvasElement) => activateDraw(e)} style={styles.canvas}></canvas>)


return (
  <SafeAreaView style={{ flex: 1 }}>
    {activateCanvas}
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 200,
    width: 200,
  },
  square: {
    height: 64,
    width: 64
  },
  canvas: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black'
  }
});
