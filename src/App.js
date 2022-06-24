import './App.scss';
import React from 'react'
import { ColorPicker, ImageUploader, DialogueTable } from './components';

function App() {
  return (
    <div className='app'>
      <ImageUploader/>
      <ColorPicker/>
      <DialogueTable/>
    </div>
  )
}

export default App;
