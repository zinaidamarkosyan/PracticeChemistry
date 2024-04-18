import { useEffect, useRef, useState } from "react"
import { themeColors } from "../../constants"


interface BarChartCanvasProps {
  play: boolean
  c2: number
  c1: number
  t2: number
  t1: number
  height: number
  width: number
  colorA: string
  colorB: string
}

const BarChartCanvas = ({ play, c2, c1, t2, t1, height, width, colorA, colorB }: BarChartCanvasProps) => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [sX, setSX] = useState<number>(0);
  const [sY, setSY] = useState<number>(0);
  const [eX, setEX] = useState<number>(0);
  const [eY, setEY] = useState<number>(0);
  // const requestAnimationFrame = window.requestAnimationFrame
  // const cancelAnimationFrame = window.cancelAnimationFrame

  const initAll = () => {
    if (!canvas.current) return
    let startX, startY1: number, endX

    startX = (t2 / 20);
    setSX(startX);
    endX = (t1 / 20);
    setEX(endX);
    startY1 = c2;
    setSY(startY1);
    const endY = Math.abs(1 - c1);
    setEY(endY);
  }

  const drawFrame = () => {
    if (!canvas.current) return
    const ctx = canvas.current.getContext('2d');
    if (!ctx) return

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(0, height);
    ctx.lineTo(width, height);
    ctx.lineTo(width, 0);
    ctx.lineWidth = 3;
    ctx.strokeStyle = "black";
    ctx.stroke();

    for (let y = 22; y < 210; y += 19) {
      ctx.beginPath();
      ctx.moveTo(width, y);
      ctx.lineTo(0, y);
      ctx.lineWidth = 0.3;
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(10, y);
      ctx.lineWidth = 2;
      ctx.stroke();
    }
  }

  function drawAt(timeOffset: number) {
    if (!canvas.current) return
    const ctx = canvas.current.getContext('2d');
    if (!ctx) return
    drawFrame()
    // console.log({ c1, c2, t1, t2 })
    // console.log({ sX, sY, eX, eY })

    const height = 194

    ctx.beginPath();
    ctx.rect(40, height, 30, - height * Math.max(c1, c2)); // grey at A
    ctx.fillStyle = themeColors.grey;
    ctx.fill();

    ctx.beginPath();
    // ctx.rect(40, height, 30, - height * Math.max(c1, c2))      // A start (c2: 0)
    ctx.rect(40, height, 30, - height * Math.abs(c1 - c2))   // A end
    ctx.fillStyle = colorA;
    ctx.fill();

    ctx.beginPath();
    // ctx.rect(140, height, 30, - height * 0)                     // B start
    ctx.rect(140, height, 30, - height * Math.min(c1, c2));  // B end
    ctx.fillStyle = colorB;
    ctx.fill();

    // dot A
    ctx.beginPath()
    ctx.moveTo(40, 200)
    ctx.arc(55, 227, 8, 0, Math.PI * 2)
    ctx.fillStyle = colorA
    ctx.fill()
    // dot B
    ctx.beginPath()
    ctx.moveTo(40, 200)
    ctx.arc(155, 227, 8, 0, Math.PI * 2)
    ctx.fillStyle = colorB
    ctx.fill()
    ctx.font = '20px Arial'
    ctx.fillStyle = 'black'
    // ctx.strokeStyle = 'black'
    ctx.fillText('A', 49, 255)
    ctx.fillText('B', 149, 255)
  }

  const [timeOffset, setTimeOffset] = useState<number>(0)
  const maxTime = Math.abs(t1 - t2)
  const framesPerSecond = 20
  const intervalTime = 1000 / framesPerSecond

  const timerID = useRef<NodeJS.Timer>()
  const startTimer = () => {
    stopTimer()
    timerID.current = setInterval(() => {
      // console.log('interval', timeOffset)
      setTimeOffset(v => v += 1 / framesPerSecond)
    }, intervalTime)
    // console.log('started', timerID.current)
  }
  const stopTimer = () => {
    if (timerID.current) {
      clearInterval(timerID.current)
      timerID.current = undefined
    }
  }
  // animation play
  useEffect(() => {
    drawAt(timeOffset)
  }, [timeOffset])

  useEffect(() => {
    if (!canvas.current) return
    initAll()
    drawAt(timeOffset)
  }, [play, c1, c2, t1, t2, sX, sY, eX, eY, colorA])
  return (
    <canvas ref={canvas} height={height + 62} width={width} />
  );
};

export default BarChartCanvas