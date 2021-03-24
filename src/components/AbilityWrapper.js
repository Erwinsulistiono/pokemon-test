import React from 'react';
import DetailBox from './DetailBox';

const AbilityWrapper = (abilities) => {
  let ability = abilities.abilities;
  console.log('//', abilities.abilities);
  // console.log('**', ability)

  return (
    <>
      {
        ability.map(a => <DetailBox key={a.ability.name} data={a.ability.name} />)
      }
    </>
  )
}

export default AbilityWrapper;