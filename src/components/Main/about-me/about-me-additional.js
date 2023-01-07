import { useState } from 'react';

export function AboutMeAdditional(props) {
  const { classAddInfo, isNameAddInfo } = props;

  return (
    <div className={`aboutMe__additional-info ${classAddInfo}`}>
      {isNameAddInfo === 'about-me' && <h2>1 блок</h2>}
      {isNameAddInfo === 'skills' && <h2>2 блок</h2>}
    </div>
  );
}
