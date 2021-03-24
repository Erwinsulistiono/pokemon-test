import React from 'react';
import DetailBox from './DetailBox';

const TypeWrapper = (pokemon) => {
  const types = pokemon.pokemon.types
  console.log(types);

  return (
    <>
      {
        types.map(t => <DetailBox key={t.type.name} data={t.type.name} />)
      }
    </>
  )
}

export default TypeWrapper;