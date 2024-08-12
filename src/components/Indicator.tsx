import React, { useState, useEffect } from 'react';
import './Indicator.css';

interface IndicatorProps {
    indicator: {
        name: string,
        value: number,
        unit: 'celsius' | 'percent' | 'kms',
    }
}

const Indicator: React.FC<IndicatorProps> = ({ indicator }) => {
    const [ unit, setUnit ] = useState<string | null>(null);

    useEffect(() => {
        if (indicator.unit === 'celsius') setUnit('°C');
        if (indicator.unit === 'percent') setUnit('%');
        if (indicator.unit === 'kms') setUnit(' km/s');
    }, [indicator.unit]);

    return (
        <div className="indicator">
            <h5>{indicator.name}</h5>
            <h2>{indicator.value}{unit}</h2>
        </div>
    );
}

export default Indicator;