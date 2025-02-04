import React from 'react';
import { useNavigate } from 'react-router-dom';

function Text() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/About1")}>go to</button>
    </div>
  )
}

export default Text;
