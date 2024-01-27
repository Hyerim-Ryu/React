/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  let [ 글제목, b ] = useState(['여자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [좋아요] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>혜리미의 블로그</h4>
      </div>
      <div className="list">
        <h4>{ 글제목[0] } <span>❤</span> {좋아요} </h4>
        <p>1월 12일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>1월 12일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[2] }</h4>
        <p>1월 12일 발행</p>
      </div>
      <h4>{ b }</h4>
    </div>
  );
}

export default App;
