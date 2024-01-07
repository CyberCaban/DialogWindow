import { useEffect, useState } from "react";
import "./App.css";
import ModalDialog from "./components/Modal/index";
import { dialogStages, dialogs } from "./dialog";
import Button from "./components/Button";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentDialog, setCurrentDialog] = useState<dialogStages[]>(
    dialogs["test 1"]
  );
  const [pashalka, setPashalka] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [audio] = useState(new Audio("./sounds/A Moment's Peace.mp3"));

  useEffect(() => {
    audio.src;
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
      <Button
        dragProps={{ drag: pashalka }}
        onClick={() => openDialog("test 1")}
      >
        show dialog 1
      </Button>
      <Button
        dragProps={{ drag: pashalka }}
        onClick={() => openDialog("test 2")}
      >
        show dialog 2
      </Button>
      <Button
        dragProps={{ drag: pashalka }}
        onClick={() => openDialog("test 3")}
      >
        show dialog 3
      </Button>
      <Button
        dragProps={{ drag: pashalka }}
        onClick={() => setPlaying((prev) => !prev)}
      >
        audio test
      </Button>
      <Button
        dragProps={{ drag: pashalka }}
        onClick={() => setPashalka((prev) => !prev)}
      >
        button test
      </Button>
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
