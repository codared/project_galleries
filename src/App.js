import {useState} from 'react';
import Head from './components/Head';
import ImageList from './components/ImageList';
import {getList} from './api';


function App(){
 const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
      const result = await getList(term);
      console.log('This is the', result)
      setImages(result.photos.photo);
 };

  return (
    <div>
      <Head onSubmit={handleSubmit} />
      <ImageList images={images} />
  </div>
  )
};

export default App