import React from "react"
export const Filter = ({ value, onChange }) => {
            return <>
                    <h2>Find contacts by name</h2>
            <input style={{ width: 300, height: 40}}  type="text" value={value} onChange= {onChange} />
        </>
}

