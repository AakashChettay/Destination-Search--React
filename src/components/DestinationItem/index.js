import './index.css'

const DestinationItem = props => {
  const {destinationData} = props
  const {id, name, imgUrl} = destinationData
  return (
    <li className="card">
      <img className="imageStyle" src={imgUrl} alt={name} />
      <p className="heading">{name}</p>
    </li>
  )
}
export default DestinationItem
