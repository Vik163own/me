import './diplomas.scss';

import web from '../../../images/ЦПВР00047.pdf';
import sgtu from '../../../images/sgtu.pdf';
import nht from '../../../images/nht.jpg';

export function Diplomas({ isOpen, name }) {
  return (
    <>
      {isOpen && (
        <section className='diplomas'>
          {name === 'web' && (
            <embed src={`${web}#view=FitH`} className='diplomas-item' />
          )}
          {name === 'sgtu' && (
            <embed src={`${sgtu}#view=FitH`} className='diplomas-item' />
          )}
          {name === 'nht' && <img src={nht} className='diplomas-item' />}
        </section>
      )}
    </>
  );
}
