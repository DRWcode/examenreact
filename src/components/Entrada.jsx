import React from 'react';

const Entrada = ({ label, name, value, onChange }) => {
    return (
        <div className="mb-3">
            <label className="form-label">{label}</label>
            <input type="text" className="form-control" name={name} value={value} onChange={onChange} required />
        </div>
    );
};

export default Entrada;