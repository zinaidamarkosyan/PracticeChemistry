import styles from './SpinBtns.module.scss'

interface SpinBtnHorizProps {
  className?: string,
  isDisabled?: boolean,
  onClickUp: () => void
  onClickDown: () => void
}
const SpinBtnHoriz = ({ className = '', isDisabled = false, onClickUp, onClickDown }: SpinBtnHorizProps) => {

  return <div className={`${className} ${styles.horizBtnGroup}`}>
    <button
      className={styles.btnUp}
      disabled={isDisabled}
      onClick={() => onClickDown()}
    >◀</button>
    <button
      className={styles.btnDown}
      disabled={isDisabled}
      onClick={() => onClickUp()}
    >▶</button>
  </div>
}

interface SpinBtnVertProps {
  className?: string,
  onClickUp: () => void
  onClickDown: () => void
}
const SpinBtnVert = ({ className = '', onClickUp, onClickDown }: SpinBtnVertProps) => {


  return <div className={`${className} ${styles.vertBtnGroup}`}>
    <button
      className={styles.btnUp}
      onClick={() => onClickUp()}
    >▲</button>
    <button
      className={styles.btnDown}
      onClick={() => onClickDown()}
    >▼</button>
  </div>
}
export {
  SpinBtnHoriz,
  SpinBtnVert,
}
