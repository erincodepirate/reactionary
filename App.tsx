import React, { useRef, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Alert } from 'react-native';
import Canvas from 'react-native-canvas';

export default function App() {
  let ctx;
  var activateDraw = (ref: HTMLCanvasElement) => {
    console.log('this is the canvas DOM element you want', ref)
    ctx = ref.getContext('2d')
    if (ctx) {
      ctx.fillStyle = 'red';
      ctx.fillRect(20, 20, 100, 100);
      // draw stuff
    }
  }
  var activateCanvas = (<canvas ref={(e: HTMLCanvasElement) => activateDraw(e)} style={styles.canvas}></canvas>)


  return (
    <SafeAreaView style={{ flex: 1 }}>
      { activateCanvas }
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
  canvas: {
    width: '100%', 
    height: '100%', 
    backgroundColor: 'black'
  }
});
