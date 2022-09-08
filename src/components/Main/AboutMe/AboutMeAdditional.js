function AboutMeAdditional(props) {
  const { classPopup, popups } = props;

  return (
    <div className={`aboutMe__additional-info ${classPopup}`}>
      {popups[0] && <h2>1 блок</h2>}
      {popups[1] && <h2>2 блок</h2>}
      {popups[2] && <h2>3 блок</h2>}
    </div>
  );
}

export default AboutMeAdditional;
