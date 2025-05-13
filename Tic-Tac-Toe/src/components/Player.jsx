import { useState } from "react"

export default function Player({ name, symbol, isActive, onSaveName }) {
    const [isEditing, setIsEditing] = useState(false)
    const [newName, setName] = useState(name)

    function handleEditClick() {
        setIsEditing(isEditing => !isEditing);
        if (isEditing) {
            onSaveName(symbol, newName);
        }
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {!isEditing && <span className="player-name">{newName}</span>}
                {isEditing && <input type="text" value={newName} onChange={(e) => setName(e.target.value)} />}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}