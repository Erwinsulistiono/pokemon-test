import React from 'react';
import DetailBox from './DetailBox';

const AbilityWrapper = (abilities) => {
  const ability = abilities.abilities;

  return (
    <>
      {
        ability.map(a => <DetailBox key={a.ability.name} data={a.ability.name} />)
      }
    </>
  )
}

export default AbilityWrapper;