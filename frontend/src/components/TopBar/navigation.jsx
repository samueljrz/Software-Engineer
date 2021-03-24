import image from '../../assets/logo250.png'
import Link from '@material-ui/core/Link';

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a href='#page-top'>
            <img src={image} alt="logo"/>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul id="usul" className='nav navbar-nav navbar-right'>
            <li>
                <Link id="button-custom" className='btn-custom' href="/">
                  Registre-se
                </Link>
              </li>
              <li>
                <Link id="button-custom" className='btn-custom' href="/">
                  Login
                </Link>
              </li>
          </ul>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#features' className='page-scroll'>
                Funcionalidades
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                Sobre
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Time
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
