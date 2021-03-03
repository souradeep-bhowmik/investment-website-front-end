import UploadTransaction from "./components/UploadTransaction";
import TableData from "./components/TableData";
import { loadOutput, resetData } from "./redux/actions/loadOutputAction";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Heading>
        <h1>Visualize investment cost basis</h1>
      </Heading>
      <UploadTransactionComponent>
        <UploadTransaction />
      </UploadTransactionComponent>

      <hr />

      <button
        className="btn btn-primary"
        onClick={() => {
          dispatch(loadOutput());
        }}
      >
        Display data
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => {
          dispatch(resetData());
        }}
      >
        Reset data
      </button>
      <DisplayDataComponent>
        <TableData />
      </DisplayDataComponent>
    </div>
  );
}

const UploadTransactionComponent = styled.div`
  // display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 3rem;
  h1 {
  }
`;

const DisplayDataComponent = styled.div`
  padding: 3rem 0rem;
`;

const Heading = styled.div`
  font-weight: bold;
  text-align: center;
  padding: 5rem 0rem;
  width: 100%;
`;

export default App;
