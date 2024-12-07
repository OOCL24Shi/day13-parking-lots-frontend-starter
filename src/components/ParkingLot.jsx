import React from 'react';
import '../styles/ParkingLot.css';

const ParkingLot = ({ name, spots }) => {
    const COLS = 3;  // Fixed number of columns
    const rows = [];
    // Determine number of rows based on parking lot name
    const numRows = spots.length / COLS;

    // Create rows based on parking lot type
    for (let i = 0; i < numRows; i++) {
        const row = spots.slice(i * COLS, (i + 1) * COLS);
        rows.push(row);
    }

    return (
        <div className="parking-lot">
            <table>
                <tbody>
                {rows.map((row, i) => (
                    <tr key={i}>
                        {row.map((spot, j) => (
                            <td key={j} className={spot ? 'occupied' : 'empty'}>
                                {spot || ''}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="lot-name">{name}</div>
        </div>
    );
};

export default ParkingLot;