import './diplomas.scss';
import './diplomas-adapt.scss';

import react from '../../../images/react.jpg';
import web from '../../../images/web.jpg';
import sgtu from '../../../images/sgtu.jpg';
import nht from '../../../images/nht.jpg';
import closeIcon from '../../../images/closeIcon.svg';

export function Diplomas({ isOpen, name, closePopup }) {
  return (
    isOpen && (
      <>
        <img
          src={closeIcon}
          className='diplomas__close'
          onClick={closePopup}
          alt='Закрыть'
        />
        <div className='diplomas__container-image'>
          {name === 'react' && <img src={react} className='diplomas-item' />}
          {name === 'web' && <img src={web} className='diplomas-item' />}
          {name === 'sgtu' && <img src={sgtu} className='diplomas-item' />}
          {name === 'nht' && <img src={nht} className='diplomas-item' />}
        </div>
      </>
    )
  );
}
