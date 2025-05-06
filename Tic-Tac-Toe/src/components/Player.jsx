import { useState } from "react"

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false)
    const [newName, setName] = useState(name)

    return (
        <li>
            <span className="player">
                {!isEditing && <span className="player-name">{name}</span>}
                {isEditing && <input type="text" onChange={(e) => name = e.target.value} />}
                <span className="player-symbol">{symbol}</span>
            </span>
            {!isEditing &&
                <button onClick={() => setIsEditing(true)}>Edit</button>}
            {isEditing &&
                <button onClick={() => setIsEditing(false)}>Save</button>}
        </li>
    )
}