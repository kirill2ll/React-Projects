import { useState } from "react"

export default function InputGroup() {

    const [ inputData, setInputData ] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
    })

    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required 
                    onChange={(e) => setInputData({...inputData, initialInvestment: e.target.value})} value={inputData.initialInvestment}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required 
                    onChange={(e) => setInputData({...inputData, annualInvestment: e.target.value})} value={inputData.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required 
                    onChange={(e) => setInputData({...inputData, expectedReturn: e.target.value})} value={inputData.expectedReturn}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required 
                    onChange={(e) => setInputData({...inputData, duration: e.target.value})} value={inputData.duration}/>
                </p>
            </div>
        </section>
    )
}