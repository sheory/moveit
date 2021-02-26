import styles from '../styles/components/Profile.module.css';
import {useContext} from "react";
import {ChallengesContext} from "../contexts/ChallengesContext";

export function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/sheory.png" alt="Sheory Machado"/>
      <div>
        <strong>Sheory Machado</strong>
        <p>
          <img src="icons/level.svg" alt=""/>
          {level}
        </p>
      </div>
    </div>
  );
}