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

  console.log(inputData)


  return (
    <main>
      <InputGroup onChangeInput={setInputData} inputData={inputData} />
      <InvestmentResults inputData={inputData} />
    </main>
  )
}

export default App
