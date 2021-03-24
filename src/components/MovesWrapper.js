import React from 'react';
import DetailBox from './DetailBox';

const MovesWrapper = (moves) => {
  let move = moves.moves;

  return (
    <>
      {
        move.map(a => <DetailBox key={a.move.name} data={a.move.name} />)
      }
    </>
  )
}

export default MovesWrapper;