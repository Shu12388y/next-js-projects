import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function App() {
  const [value, setValue] = useState('');
  const content=
  console.log(value); 

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}


export default App;