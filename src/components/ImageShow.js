const ImageShow = ({image}) => {

  const {id, server, secret} = image;

  const imageUrl = `https://live.staticflickr.com/${server}/${id}_${secret}.jpg`;

  return (
    <div>
      <img src={imageUrl} alt={image.alt_description} />
    </div>
  )
}

export default ImageShow;