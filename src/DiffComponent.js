import React from 'react';
import { diffChars } from 'diff'; // Import the diffChars method from jsdiff

const DiffComponent = ({ oldText, newText }) => {
    const diff = diffChars(oldText, newText);
    return (
      <div>
        {diff.map((part, index) => {
          const style = {
            color: part.added ? 'green' : part.removed ? 'red' : 'grey',
            textDecoration: part.removed ? 'line-through' : 'none'
          };
          return <span key={index} style={style}>{part.value}</span>;
        })}
      </div>
    );
  };
  
  export default DiffComponent;
  