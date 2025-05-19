import { useState } from "react"

export default function InputGroup({onChangeInput, inputData}) {



    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input type="number" required 
                    onChange={(e) => onChangeInput({...inputData, initialInvestment: +e.target.value})} 
                    value={inputData.initialInvestment}/>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input type="number" required 
                    onChange={(e) => onChangeInput({...inputData, annualInvestment: +e.target.value})} value={inputData.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input type="number" required 
                    onChange={(e) => onChangeInput({...inputData, expectedReturn: +e.target.value})} value={inputData.expectedReturn}/>
                </p>
                <p>
                    <label>Duration</label>
                    <input type="number" required 
                    onChange={(e) => onChangeInput({...inputData, duration: +e.target.value})} value={inputData.duration}/>
                </p>
            </div>
        </section>
    )
}