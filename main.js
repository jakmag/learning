const { useState } = React;

const App = () => {

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadData = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
      setData([1,2,3]);
    },4000);
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      <pre>{JSON.stringify(data, null, '')}</pre>
      <button onClick={loadData}>Load Data</button>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
