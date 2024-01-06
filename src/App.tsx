import { useEffect, useState } from "react";
import "./App.css";
import ModalDialog from "./components/Modal/index";
import { dialogStages, dialogs } from "./dialog";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentDialog, setCurrentDialog] = useState<dialogStages[]>(
    dialogs["test 1"]
  );
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio("./sounds/A Moment's Peace.mp3"));

  useEffect(() => {
    audio.src
    if (playing) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0.0;
    }
  }, [playing]);

  function openDialog(dialogId: string) {
    if (!dialogs[dialogId]) {
      console.log(dialogs[dialogId]);
      alert("Sorry there's nothing here");

      return;
    }
    setCurrentDialog(dialogs[dialogId]);
    setShowModal(true);
  }

  // useEffect(() => {
  //   console.log(`currentDialog: ${JSON.stringify(currentDialog)}`);
  // }, [currentDialog]);

  return (
    <>
      <button onClick={() => openDialog("test 1")}>show dialog 1</button>
      <button onClick={() => openDialog("test 2")}>show dialog 2</button>
      <button onClick={() => openDialog("test 3")}>show dialog 3</button>
      <button onClick={() => setPlaying((prev) => !prev)}>audio test</button>
      <ModalDialog
        open={showModal}
        setShowModal={setShowModal}
        dialogStages={currentDialog}
        key={`${showModal}`}
      />
    </>
  );
}

export default App;
