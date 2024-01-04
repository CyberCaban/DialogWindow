import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import "./index.css";

type dialogStages = {
  speaker: string;
  line: string;
};

type Props = {
  children?: React.ReactElement | React.ReactElement[];
  open: boolean;
  style?: React.CSSProperties;
  onClick?(event: React.MouseEvent<HTMLDialogElement>): void;
  dialogStages: dialogStages[];
  setShowModal: Dispatch<SetStateAction<boolean>>;
};

export default function ModalDialog({
  children,
  open,
  style,
  dialogStages,
  setShowModal: closeModal,
}: Props) {
  const [dialogStage, setDialogStage] = useState(1);
  const [currentLine, setCurrentLine] = useState(dialogStages[0].line);
  const [currentSpeaker, setCurrentSpeaker] = useState(dialogStages[0].speaker);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      dialog.current!.style.display = "flex";
    } else {
      dialog.current?.close();
      dialog.current!.style.display = "none";
    }
  }, [open]);

  function dialogAdvance() {
    const dialogSections = dialogStages.length;
    if (dialogStage < dialogSections) {
      setDialogStage((prev) => prev + 1);
      setCurrentLine(dialogStages[dialogStage].line);
      setCurrentSpeaker(dialogStages[dialogStage].speaker);
    } else {
      setCurrentLine(dialogStages[0].line);
      setCurrentSpeaker(dialogStages[0].speaker);
      setDialogStage(1);
      closeModal(false);
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
      <dialog ref={dialog} style={style} onClick={dialogAdvance}>
        <div className="nameplate">
          <h2 className="speaker" key={currentSpeaker}>
            {currentSpeaker}
          </h2>
        </div>
        <h1 className="line" key={currentLine}>
          {currentLine}
        </h1>
        {children}
        <div className="arrow" />
        <div className="arrow_outline" />
      </dialog>
    </>
  );
}
