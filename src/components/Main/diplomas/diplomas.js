import './diplomas.scss';
import './diplomas-adapt.scss';

import web from '../../../images/web.jpg';
import sgtu from '../../../images/sgtu.jpg';
import nht from '../../../images/nht.jpg';
import closeIcon from '../../../images/closeIcon.svg';

export function Diplomas({ isOpen, name, closePopup }) {
  return (
    <>
      {isOpen && (
        <section className='diplomas'>
          <img
            src={closeIcon}
            className='diplomas__close'
            onClick={closePopup}
            alt='Закрыть'
          />
          {name === 'web' && <img src={web} className='diplomas-item' />}
          {name === 'sgtu' && <img src={sgtu} className='diplomas-item' />}
          {name === 'nht' && <img src={nht} className='diplomas-item' />}
        </section>
      )}
    </>
  );
}
