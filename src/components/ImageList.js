import './ImageList.css'

import ImageShow from './ImageShow';

function ImageList({images}){
  const  list = images.slice(0, 16)
  const renderedImages = list.map((image) => {
    return <ImageShow key={image?.id} image={image} />
  })
  console.log("This is the new", list)

  return ( 
    <div className="image-list" > 
      {renderedImages}
    </div>
    )
   
}

export default ImageList;