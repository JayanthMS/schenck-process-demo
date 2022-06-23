import './App.scss';
import React, { useState } from 'react'
import { CloudUploadOutlined } from '@ant-design/icons'

function App() {
  const [selectedImage, setSelectedImage] = useState('')
  const call = (evt) => {
    console.log('e', evt.target.files[0])
    const files = evt.target.files
    if (FileReader && files && files.length) {
      const fr = new FileReader()
      fr.onload = function () {
        setSelectedImage(fr.result)
      }
      fr.readAsDataURL(files[0])
    }
  }


  return (
    <div className='app'>
      <div className='image-uploader'>
        {selectedImage && <div className='image-wrapper'>
          <img src={selectedImage} width="100px" height="100px" alt={'alt-img'} />
        </div>}
        <label className="choose-button">
          {selectedImage
            ? <label>Upload</label>
            : <><CloudUploadOutlined className='upload-icon' />
              Drag & Drop files here or
              <label>Upload</label>
            </>
          }
          <input title="" type="file" onChange={call} accept=".png,.gif,.jpg" />
        </label>
      </div>
    </div>
  )
}

export default App;
