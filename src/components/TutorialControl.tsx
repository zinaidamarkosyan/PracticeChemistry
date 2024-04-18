import styles from './TutorialControl.module.scss'
import ImgBeacky from '../assets/ReactionRates/reaction_boxes/beaky.png'
import useAppData from '../hooks/useAppData'
import { useHighLight } from '../hooks/useHighlight'
import { maxStep_Zero, tur_Hightlights, tur_Text } from '../pages/ReactionRates/zero/constants'
import Buttons from './Buttons/Buttons'

interface TutorialControlProps {
  turText: string[]
  isDisableNextButton?: boolean
  className?: string
  onStepChange: (step: number) => void
}

const TutorialControl = ({
  turText,
  isDisableNextButton = false,
  className,
  onStepChange
}: TutorialControlProps) => {
  return (<div className={`${styles.tutorialControl} ${className || ''}`}>
    <div
      id='tur_tutorialText'
      className={styles.tutorialTextContainer}
    >
      <div className={styles.tutorialText}>
        {turText?.map((val, index) => <div
          key={index}
          className={styles.tutorialTextItem}
          dangerouslySetInnerHTML={{ __html: val || '' }}
        />)}
      </div>
      <div className={styles.beakyIcon}>
        <img src={ImgBeacky} alt='beacky' />
      </div>
    </div>
    <div className={styles.stepButtons}>
      <Buttons.StepButton
        id='tur_stepPrevButton'
        onClick={() => onStepChange(-1)}
      >
        &#9664;
      </Buttons.StepButton>
      <Buttons.NextButton
        id='tur_stepNextButton'
        onClick={() => onStepChange(1)}
        disabled={isDisableNextButton}
      />
      {/* <button
        id='tur_stepPrevButton'
        className={styles.prevBtn}
        onClick={() => onStepChange(-1)}
      >
        &#9664;
      </button> */}
      {/* <button
        id='tur_stepNextButton'
        className={styles.nextBtn}
        onClick={() => onStepChange(1)}
      >
        Next <span>&#9654;</span>
      </button> */}
      {/* <button onClick={() => handleTest()}>Test tutorial</button> */}
    </div>
  </div>)
}
export default TutorialControl