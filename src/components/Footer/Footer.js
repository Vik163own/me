import './footer.css';

function Footer() {
  return (
    <footer className='footer page__footer'>
      <p className='footer__date'>&copy; {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
