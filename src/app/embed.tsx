import React from 'react';

interface EndedProps {
  message: string;
}

const Ended: React.FC<EndedProps> = ({ message }) => {
  return (
    <div>
      <h2>Ended</h2>
      <p>{message}</p>
    </div>
  );
};

export default Ended;
