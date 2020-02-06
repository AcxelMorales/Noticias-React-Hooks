import React, { useState } from 'react';

const useSelect = (initialState, options) => {
    // State
    const [state, setState] = useState(initialState);

    const selectNews = () => (
        <select
            className="browser-default"
            value={state}
            onChange={e => setState(e.target.value)}
        >
            {options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
        </select>
    );

    return [state, selectNews];
};

export default useSelect;
