import UploadTransaction from "./components/UploadTransaction";
import TableData from "./components/TableData";
import { loadOutput, resetData } from "./redux/actions/loadOutputAction";
import { useDispatch } from "react-redux";
import {
  UploadTransactionComponent,
  DisplayDataComponent,
  Heading,
} from "./styled-components/Styles";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      {/* Basic application header */}
      <Heading>Visualize investment cost basis</Heading>

      {/* Rendering the upload file component with styled component wrap */}
      <UploadTransactionComponent>
        <UploadTransaction />
      </UploadTransactionComponent>

      <hr />

      {/* Button to fetch cost basis data form server */}
      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(loadOutput());
        }}
      >
        Display data
      </button>
      {/* Button to reset state  */}
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch(resetData());
        }}
      >
        Reset data
      </button>
      {/* Rendering the table data that displays the cost basis output */}
      <DisplayDataComponent>
        <TableData />
      </DisplayDataComponent>
    </div>
  );
}

export default App;
