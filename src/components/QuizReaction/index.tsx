import { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Buttons from '../Buttons/Buttons'
import { convertExpToHtml, getItemsRandomlyFromArray, getStorage, setStorage } from '../../helper/functions'
import useAppData from '../../hooks/useAppData'
import useFunctions from '../../hooks/useFunctions'
import { QuizAnswerType, QuizItemType } from '../../helper/types'
import QuestionStep from './QuestionStep'
import QuestionDifficulty from './QuestionDifficulty'

// Main page
interface QuizReactionProps {
  quizKind: string
  quizData: QuizItemType[]
}
const QuizReaction = ({ quizKind, quizData }: QuizReactionProps) => {
  const [quizType, setQuizType] = useState(0)
  const [quizStep, setQuizStep] = useState(0)
  const [quizList, setQuizList] = useState<QuizItemType[]>([])
  const [selectedAnswer, setSelectedAnswer] = useState<number[][]>([])
  const [correctStep, setCorrectStep] = useState(0)

  const {
    updatePageFromMenu,
    getNextMenu,
  } = useFunctions()

  useEffect(() => {
    loadQuizData()
  }, [])

  const loadQuizData = () => {
    const quizStored = getStorage(`${quizKind}QuizResult`)
    if (!quizStored) return
    // console.log('loadQuizData', { quizStored })
    const { quizType, quizStep, quizList, selectedAnswer, correctStep } = quizStored
    setQuizStep(quizStep ?? 0)
    setQuizType(quizType)
    setQuizList(quizList)
    setSelectedAnswer(selectedAnswer)
    if (quizType > 0) setCorrectStep(100)
  }
  const saveQuizData = () => {
    const quizData = {
      quizType,
      quizStep: quizType + 1,
      quizList,
      selectedAnswer,
      correctStep: correctStep + 1,
    }
    // console.log('saveQuizData', { quizData })
    setStorage(`${quizKind}QuizResult`, quizData)
  }

  const handleInitializeQuiz = () => {
    setStorage(`${quizKind}QuizResult`, {})
    loadQuizData()
  }
  const handleStep = (val: number) => {
    let nextStep = quizStep + val
    if (nextStep > quizType + 1) {
      if (quizType > 0) {
        // show Next Course
        console.log('===handleStep=== 1')
        updatePageFromMenu(getNextMenu(1), false)
      }
      return
    } else if (nextStep === quizType + 1) {
      saveQuizData()
      setCorrectStep(100)
    } else if (nextStep < 0) {
      // show Prev Course
      updatePageFromMenu(getNextMenu(-1), false)
      return
    }
    // console.log('handleStep', { val, nextStep })
    setQuizStep(nextStep)
  }
  const handleQuizTypeChange = (val: number) => {
    setQuizType(val)
    const updateQuizList: QuizItemType[] = getItemsRandomlyFromArray(quizData, val)
    const updateAnswerItems: QuizAnswerType[][] = []
    updateQuizList.forEach(item => {
      const { correctAnswer, otherAnswers } = item
      const res: QuizAnswerType[] = getItemsRandomlyFromArray([correctAnswer, ...otherAnswers])
      item.allAnswerItems = res
      updateAnswerItems.push(res)
    })
    // setAnswerList(updateAnswerItems)

    // console.log('111', { update: updateQuizList, updateAnswerItems })
    setQuizList(updateQuizList)
    setCorrectStep(0)
    setSelectedAnswer([])
  }

  const handleSelectAnswers = (sel: number[], idx: number) => {
    // console.log('selectedAnswers 1', { sel, idx })
    const update = [...selectedAnswer]
    update[idx] = sel
    // console.log('selectedAnswers 2', { selectedAnswer, update })
    setSelectedAnswer(update)
  }
  const handleCorrectAnswer = (val: number) => {

    // console.log({ correctStep, correctAnswerData: quizList[val] })
    setCorrectStep(v => v + 1)
  }

  return <>
    {/* <div className={styles.stepButtons}> */}
    <Buttons.StepButton
      onClick={() => handleStep(-1)}
      className={styles.prevBtn}
    >
      &#9664;
    </Buttons.StepButton>
    <Buttons.StepButton
      onClick={() => handleStep(1)}
      className={styles.nextBtn}
      disabled={!quizType || correctStep < quizStep}
    >
      &#9654;
    </Buttons.StepButton>
    {quizStep === quizType + 1 && <Buttons.StepButton
      onClick={() => handleInitializeQuiz()}
      className={styles.refreshBtn}
    >
      &#8634;
    </Buttons.StepButton>}

    {/* </div> */}
    <div className={styles.container}>
      {/* <div className={styles.navMenuDivider}></div> */}
      {quizStep === 0 && <div className={styles.content}>
        <h1 className={styles.title}>Let's take a quiz</h1>
        <h2 className={styles.description}>Choose the difficulty level of the quiz</h2>
        <div className={styles.skipQuiz}>
          <p
            onClick={() => {
              updatePageFromMenu(getNextMenu(1), false)
            }}
          >
            Skip Quiz
          </p>
        </div>
        <div className={styles.selectQuiz}>
          <QuestionDifficulty
            text={'Easy'}
            count={5}
            onClick={handleQuizTypeChange}
            isActive={quizType === 5}
          />
          <QuestionDifficulty
            text={'Medium'}
            count={10}
            onClick={handleQuizTypeChange}
            isActive={quizType === 10}
          />
          <QuestionDifficulty
            text={'Hard'}
            count={20}
            onClick={handleQuizTypeChange}
            isActive={quizType === 20}
          />
        </div>
      </div>}
      {quizStep > 0 && quizStep < quizType + 1 && <div className={styles.content}>
        <QuestionStep
          quizItem={quizList[quizStep - 1]}
          selectedAnswers={selectedAnswer[quizStep - 1] ?? []}
          onSelectAnswers={(sel) => handleSelectAnswers(sel, quizStep - 1)}
          isCorrectAnswered={correctStep >= quizStep}
          onCorrectAnswer={(val) => handleCorrectAnswer(val)}
        />
      </div>}
      {quizStep === quizType + 1 && <>

        <div className={styles.content}>
          <h1 className={styles.title}>You got {selectedAnswer.filter(a => a.length === 1).length} correct out of {quizType}</h1>
          <h2 className={styles.description}>Let's review the questions</h2>

          {quizList.map((quizItem, idx) =>
            <ResultAnswerCard key={idx} quizItem={quizItem} selAnswerOrder={selectedAnswer[idx]} />
          )}
        </div>
      </>
      }
    </div>
  </>
}
export default QuizReaction

interface ResultAnswerCardProps {
  quizItem: QuizItemType
  selAnswerOrder: number[]
  // correctAnswerIndex: number
}
const ResultAnswerCard = ({ quizItem, selAnswerOrder }: ResultAnswerCardProps) => {
  return <div
    className={`
    ${styles.quizResultCard} 
    ${selAnswerOrder.length === 1 ? styles.correctBorder : styles.wrongBorder}
  `}
  >
    <div className={styles.question} dangerouslySetInnerHTML={{ __html: convertExpToHtml(quizItem.question) }} />
    {selAnswerOrder.length === 1 ?
      <div className={styles.correctIcon}>
        <i className="fa fa-check"></i>
      </div> :
      <div className={styles.wrongIcon}>
        <i className="fa fa-close"></i>
      </div>
    }
    {selAnswerOrder.map((sel, index) => {
      let answer = quizItem?.allAnswerItems ? quizItem?.allAnswerItems[sel]?.answer : ''
      const explaination = quizItem?.allAnswerItems ? quizItem?.allAnswerItems[sel]?.explanation : ''
      const isCorrectAnswer = index === selAnswerOrder.length - 1
      answer = (isCorrectAnswer ? 'Correct Answer: ' : 'Your Answer: ') + answer
      return <div
        key={index}

      >
        <div className={`${isCorrectAnswer ? styles.correctText : styles.wrongText}`}>
          <div dangerouslySetInnerHTML={{ __html: convertExpToHtml(answer) || '' }} />
        </div>
        <ShowExplaination explaination={explaination} />
      </div>
    })}
  </div>
}
const ShowExplaination = ({ explaination }: { explaination: string }) => {
  const [isShow, setIsShow] = useState(false)
  return <div>
    <div className={styles.toggleShow}
      onClick={() => setIsShow(v => !v)}
    >
      {!isShow ? 'Show Explaination' : 'Hide Explaination'}
    </div>
    {isShow === true && <div className={styles.explanation} dangerouslySetInnerHTML={{ __html: convertExpToHtml(explaination) || '' }} />}
  </div>
}