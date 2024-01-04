import { useState } from "react";
import "./App.css";
import ModalDialog from "./components/Modal/index";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>open</button>
      <ModalDialog
        open={showModal}
        setShowModal={setShowModal}
        dialogStages={[
          { speaker: "Fuuka", line: "Tell 'em to bring out the whole ocean!" },
          { speaker: "Junpei", line: "Let's go golfing!" },
          { speaker: "Yukari", line: "Life is roblox" },
          { speaker: "Yukari", line: "Roses are red" },
          { speaker: "Yukari", line: "Violets are blue" },
        ]}
      ></ModalDialog>
    </>
  );
}

export default App;
