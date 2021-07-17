import React from 'react';
import { ObjectDetector } from '../../components/ObjectDetector/ObjectDetector';
import Header from '../../components/Header/Header';

export default function Detect() {
  return (
    <div>
      <Header header="Detect Image"/>
      <h1>Start learning by detecting an object!!!!!</h1>
      <ObjectDetector/>
    </div>
  );
}
