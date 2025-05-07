import { useState } from "react"

export default function Player({ name, symbol, isActive }) {
    const [isEditing, setIsEditing] = useState(false)
    const [newName, setName] = useState(name)

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing && <span className="player-name">{newName}</span>}
                {isEditing && <input type="text" value={newName} onChange={(e) => setName(e.target.value)} />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={() => setIsEditing(isEditing => !isEditing)}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}