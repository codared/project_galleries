import ImageShow from './ImageShow';
import './ImageList.css'
import '../../node_modules/rsuite/dist/rsuite.min.css';
import { Placeholder } from 'rsuite'
const { Grid } = Placeholder;

const ImageList = ({loading, images}) => {
  const  list = images.slice(0, 16)

  const renderedImages = list.map((image) => {
    return <ImageShow key={image?.id} image={image} />
  })

  if (loading)
    return (
      <div className="fade-list" style={{width: '50%'}}>
        <Grid  columns={4} rows={4} rowHeight={100} rowMargin={10} active />
      </div>
    )
  return (
    <div className="image-list">
      {renderedImages}
    </div>
  )
}

export default ImageList;