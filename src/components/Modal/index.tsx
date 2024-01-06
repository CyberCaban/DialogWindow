import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import "./index.css";
import { dialogStages } from "../../dialog";

type Props = {
  // children?: React.ReactElement | React.ReactElement[];
  open: boolean;
  style?: React.CSSProperties;
  onClick?(event: React.MouseEvent<HTMLDialogElement>): void;
  dialogStages: dialogStages[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function ModalDialog({
  // children,
  open,
  style,
  dialogStages,
  setShowModal: showModal,
}: Props) {
  const [dialogStage, setDialogStage] = useState(1);
  const [currentLine, setCurrentLine] = useState(dialogStages[0]?.line);
  const [currentSpeaker, setCurrentSpeaker] = useState(
    dialogStages[0]?.speaker
  );
  const [events, setEvents] = useState(dialogStages[0]?.event?.eventType);
  const [audio] = useState(new Audio(events?.soundURL || ""));
  const dialog = useRef<HTMLDialogElement>(null);

  function resetDialog() {
    setCurrentLine(dialogStages[0].line);
    setCurrentSpeaker(dialogStages[0].speaker);
    setDialogStage(1);
    showModal(false);
    audio.src = "";
  }

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      dialog.current!.style.display = "flex";

      if (events?.soundURL) {
        audio.src = events?.soundURL;
        audio.play();
      }
    } else {
      dialog.current?.close();
      dialog.current!.style.display = "none";
      audio.src = "";
    }
  }, [open]);

  useEffect(() => {
    console.log(JSON.stringify(audio));
  }, [audio]);

  function dialogAdvance() {
    const dialogSections = dialogStages.length;
    if (dialogStage < dialogSections) {
      setDialogStage((prev) => prev + 1);
      setCurrentLine(dialogStages[dialogStage].line);
      setCurrentSpeaker(dialogStages[dialogStage].speaker);
      setEvents(dialogStages[dialogStage].event?.eventType);
      audio.src = dialogStages[dialogStage]?.event?.eventType.soundURL || "";
      audio.play();
    } else {
      resetDialog();
    }
  }

  return (
    <>
      {open && (
        <div
          className="shadow"
          //  style={{ top: "70%" }}
        />
      )}
      {open && <img src={events?.imageURL} alt="" className="eventImage" />}
      <dialog ref={dialog} style={style} onClick={dialogAdvance}>
        <div className="nameplate">
          <h2 className="speaker" key={currentSpeaker}>
            {currentSpeaker}
          </h2>
        </div>
        <p className="line" key={currentLine}>
          {currentLine}
        </p>
        {/* {children} */}

        <div className="arrow" />
        <div className="arrow_outline" />
      </dialog>
    </>
  );
}
