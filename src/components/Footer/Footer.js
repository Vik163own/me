import './footer.css';

export function Footer() {
  return (
    <footer className='footer page__footer'>
      <p className='footer__date'>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}
