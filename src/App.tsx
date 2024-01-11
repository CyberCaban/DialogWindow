import { useEffect, useRef, useState } from "react";
import "./App.css";
import ModalDialog from "./components/Modal/index";
import { dialogStages, dialogs } from "./dialog";
import Button from "./components/Button";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [currentDialog, setCurrentDialog] = useState<dialogStages[]>(
    dialogs["test 1"]
  );
  const [enableDrag, setEnableDrag] = useState(false);
  const appConstraint = useRef(null);
  const [random, setRandom] = useState(Math.random());
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
  }, [playing, audio]);

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
    <div id="app" ref={appConstraint}>
      <Button
        dragProps={{
          drag: enableDrag,
          dragConstraints: appConstraint,
          dragSnapToOrigin: true,
        }}
        disabled={enableDrag}
        onClick={() => openDialog("test 1")}
      >
        show dialog 1
      </Button>
      <Button
        dragProps={{
          drag: enableDrag,
          dragConstraints: appConstraint,
          dragElastic: 1,
        }}
        disabled={enableDrag}
        onClick={() => openDialog("test 2")}
      >
        show dialog 2
      </Button>
      <Button
        dragProps={{
          drag: enableDrag,
          dragConstraints: appConstraint,
          whileDrag: { rotate: random * 360 },
          onDragEnd: () => setRandom(Math.random()),
        }}
        disabled={enableDrag}
        onClick={() => openDialog("test 3")}
      >
        show dialog 3
      </Button>
      <Button
        dragProps={{
          drag: enableDrag,
          dragConstraints: appConstraint,
          // dragSnapToOrigin: true,
          dragTransition: {
            bounceDamping: 0,
            min: 0,
            max: 10,
            bounceStiffness: 2000,
            timeConstant: 300,
          },
        }}
        disabled={enableDrag}
        onClick={() => setPlaying((prev) => !prev)}
      >
        audio test
      </Button>
      <Button
        dragProps={{
          drag: enableDrag,
          dragConstraints: appConstraint,
        }}
        onClick={() => setEnableDrag((prev) => !prev)}
      >
        button test
      </Button>
      <ModalDialog
        open={showModal}
        setShowModal={setShowModal}
        dialogStages={currentDialog}
        key={`${showModal}`}
      />
    </div>
  );
}

export default App;

