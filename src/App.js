import UploadTransaction from "./components/UploadTransaction";
import TableData from "./components/TableData";
import { loadOutput } from "./redux/actions/loadOutputAction";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <UploadTransaction />
      <button
        onClick={() => {
          dispatch(loadOutput());
        }}
      >
        Display data
      </button>
      <TableData />
    </div>
  );
}

export default App;
