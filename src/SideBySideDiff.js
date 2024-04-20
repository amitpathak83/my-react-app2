import React from 'react';
import { diffLines } from 'diff'; // Using diffLines for multi-line diffs

const SideBySideDiff = ({ oldText, newText }) => {
    const diffResult = diffLines(oldText, newText);
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', fontFamily: 'monospace' }}>
            <div style={{ width: '50%' }}>
                <h2>Original</h2>
                {diffResult.map((part, index) => {
                    if (!part.added) {
                        const style = {
                            backgroundColor: part.removed ? '#ffdddd' : 'transparent',
                            textDecoration: part.removed ? 'line-through' : 'none'
                        };
                        return (
                            <div key={index} style={style}>
                                {part.value.split('\n').map((line, i) => <div key={i}>{line || '\u00A0'}</div>)}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            <div style={{ width: '50%' }}>
                <h2>Changed</h2>
                {diffResult.map((part, index) => {
                    if (!part.removed) {
                        const style = {
                            backgroundColor: part.added ? '#ddffdd' : 'transparent'
                        };
                        return (
                            <div key={index} style={style}>
                                {part.value.split('\n').map((line, i) => <div key={i}>{line || '\u00A0'}</div>)}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default SideBySideDiff;
