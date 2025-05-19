import { useState } from "react"
import InputGroup from "./components/InputGroup"
import InvestmentResults from "./components/InvestmentResults"

function App() {

  const [inputData, setInputData] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })
  const inputIsValid = inputData.duration > 0;

  return (
    <main>
      <InputGroup onChangeInput={setInputData} inputData={inputData} />
      {inputIsValid && <InvestmentResults inputData={inputData} />}
      {!inputIsValid && <p className="center">The duration should be greater than 0!</p>}
    </main>
  )
}

export default App
