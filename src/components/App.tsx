import "./App.css";
import axios from "axios";

function App() {
  const handleCallLambda = () => {
    axios
      .get(
        "https://x7426litg1.execute-api.ap-northeast-1.amazonaws.com/get_weather_data"
      )
      .then((response) => {
        console.log(`response = ${JSON.stringify(response)}`);
      })
      .catch((error) => {
        console.log(`error = ${error}`);
      });
  };

  return (
    <div className="App">
      <h2>Call Lambda!</h2>
      <button onClick={handleCallLambda}>Call Lambda func</button>
    </div>
  );
}

export default App;
