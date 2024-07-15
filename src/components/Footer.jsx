import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="min-h-[50vh] px-16 max-sm:px-4 py-10 flex flex-col items-start justify-between">
      <h1 className="text-secondary text-5xl font-bold ">CONTACT</h1>
      <div className="text-gray-400 flex items-center gap-5 max-sm:flex-col max-sm:items-start">
        <a
          href="https://www.linkedin.com/in/navaneeth-k-g"
          className="flex items-center gap-3"
        >
          {' '}
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl text-white" />
          <h2 className="text-2xl">linkedin</h2>
        </a>
        <a
          href="https://www.instagram.com/_navnt_/"
          className="flex items-center gap-3 "
        >
          {' '}
          <FontAwesomeIcon
            icon={faSquareInstagram}
            className="text-2xl text-white"
          />
          <h2 className="text-2xl">instagram</h2>
        </a>
        <a href="mailto:navaneethkg99@gmail.com" className="flex items-center gap-3">
          {' '}
          <FontAwesomeIcon icon={faEnvelope} className="text-xl text-white" />
          <h2 className="text-2xl">mail</h2>
        </a>
      </div>
      <p className="text-slate-300 text-center w-full">made by Navaneeth</p>
    </footer>
  );
};

export default Footer;
