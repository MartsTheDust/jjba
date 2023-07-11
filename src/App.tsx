import GetImg from "./ImageExporter";
import "./App.scss";

function App() {
  return <div className="flex">{ProduceBlock()}</div>;
}

function ProduceBlock() {
  const PART: string = "part";

  let divBlock = [];

  for (let i = 1; i < 10; i++) {
    divBlock.push(<div id={PART + i}>{AttachImage(i)}</div>);
  }

  return divBlock;
}

function AttachImage(partNum: number) {
  return <img src={GetImg(partNum)} alt={"Part"} />;
}

export default App;
