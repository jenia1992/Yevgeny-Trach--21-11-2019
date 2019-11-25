import React from 'react';

const AutoComplete=({inputValue,suggestions,onTextChange,onSelect})=> {
    const renderSuggestions=()=>{
        if(!suggestions.length) return null
        return(
            <ul>
                {suggestions.map((item,i)=><li onClick={()=>onSelect(item)} key={i} >{item.LocalizedName}</li>)}
            </ul>
        )
}
    return (
        <div className="AutoCompleteText mt-3">
            <input placeholder="Enter City...   example:'Tel Aviv'" value={inputValue} onChange={(e) => onTextChange(e.target.value)}  type="text"/>
            {renderSuggestions()}
        </div>
    );
}

export default AutoComplete;