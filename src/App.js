import {useState} from 'react';
import Head from './components/Head';
import ImageList from './components/ImageList';
import {getList} from './api';

const App = () => {
 const [images, setImages] = useState([]);

 const [loading, setLoading] = useState(false);

  const handleSubmit = async (term) => {
    try {
      setLoading(true);
      const result = await getList(term);
      setImages(result.photos.photo);
    } catch(error) {

    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <Head onSubmit={handleSubmit} />
      <ImageList images={images} loading={loading} />
    </div>
  )
}

export default App