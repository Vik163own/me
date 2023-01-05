import { useState } from 'react';

function AboutMeAdditional(props) {
  const { classAddInfo, isNameAddInfo } = props;
  const [isAddInfo, setIsAddInfo] = useState(false);

  const styleAddInfo = 'aboutMe__additional-info-link-style';

  const setStyle = () => {
    setIsAddInfo(!isAddInfo);
  };

  return (
    <div
      className={`aboutMe__additional-info ${classAddInfo} ${
        isAddInfo && styleAddInfo
      }`}
      onClick={setStyle}
      style={{ width: '1200px' }}
    >
      {isNameAddInfo === 'about-me' && <h2>1 блок</h2>}
      {isNameAddInfo === 'skills' && <h2>2 блок</h2>}
      {isNameAddInfo === 'contacts' && <h2>3 блок</h2>}
    </div>
  );
}

export default AboutMeAdditional;
