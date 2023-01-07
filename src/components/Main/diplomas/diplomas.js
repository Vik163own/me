import './diplomas.scss';

import web from '../../../images/ЦПВР00047.pdf';

export function Diplomas({ isOpen, name }) {
  return (
    <>
      {isOpen && (
        <section className='diplomas'>
          {name === 'web' && (
            <embed src={`${web}#view=FitH`} className='diplomas-item' />
          )}
        </section>
      )}
    </>
  );
}
