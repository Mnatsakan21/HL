import "./livestreamslice.style.scss"

const LiveStreamSlice = ({img,about}) => {
  return (
    <div className="live_stream_slice">
        <img src={img} alt="Ուղիղ եթեր" />
        <h3>{about}</h3>
        <h4>Ուղիղ եթեր</h4>
    </div>
  )
}

export default LiveStreamSlice