import "./App.css";
import Video from "./components/video";
const App = () => {
  return (
    <>
      <header>
        <strong>
          <em>react-tube-app</em>
        </strong>
      </header>
      <Video
        thumbnail="https://i.ytimg.com/vi/zQ41hq1V0Kk/mqdefault.jpg"
        title="red stewart - young turks"
      />
      <Video />
    </>
  );
};
export default App;
