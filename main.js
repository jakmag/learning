const { useState } = React;

const Counter = ({initialCount}) => {

  const [count, setCount] = useState(initialCount)

  const handleClick = () => {
    setTimeout(() => {
      setCount(previous => previous + 1)
    },1000);
  }

  return (
    <>
    Count: {count}
    <button onClick={handleClick}>
      Increment basic shit
    </button>
    </>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Counter initialCount={0} />
)