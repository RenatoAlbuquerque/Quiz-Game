import styles from "../styles/Temporizador.module.css";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

interface TemporizadorProps {
  key: any;
  duracao: number;
  tempoEsgotado: () => void;
}

export default function Temporizador(props: TemporizadorProps) {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        duration={props.duracao}
        size={120}
        isPlaying
        onComplete={props.tempoEsgotado}
        colors={["#00773c", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[6, 4, 2, 0]}
      >
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  );
}
