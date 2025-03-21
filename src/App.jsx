import VideoPlayer from "./components/VideoPlayer"
import video from "../public/elon_musk.mp4"

function App() {
  return (
    <>
      <VideoPlayer src={video} />
    </>
  )
}

export default App
