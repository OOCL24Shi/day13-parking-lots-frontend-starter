import React from 'react';
import '../styles/ParkingLot.css';

const ParkingLot = ({ name, spots }) => {
    const rows = [];
    for (let i = 0; i < 3; i++) {
        const row = spots.slice(i * 3, (i + 1) * 3);
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