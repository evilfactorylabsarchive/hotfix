import Link from 'next/link'

export default () => (
  <nav className='c-navbar'>
    <div className='c-navbar__left'>
      <Link href='/'>
        <a>
          <img src='/static/img/logo.svg' />
        </a>
      </Link>
    </div>
    <div className='c-navbar__right'>
      <Link href='/'>
        <a className='c-navbar__link'>home</a>
      </Link>
      <Link href='/explore'>
        <a className='c-navbar__link'>explore</a>
      </Link>
      <Link href='/question'>
        <a className='c-navbar__link'>question?</a>
      </Link>
    </div>
    <style jsx>{`
      .c-navbar {
        position: relative;
        z-index: 1;
        display: table;
        width: 100%;
        padding: 2rem;
        background-color: transparent;
      }
      .c-navbar__left {
        text-align: center;
        float: left;
        width: 100%;
      }
      .c-navbar__left img {
        width: 50%;
      }
      .c-navbar__right {
        // TODO: For now just hide the navbar in mobile!
        display: none;
      }
      .c-navbar__link {
        font-family: 'Menlo', 'Hack', monospace;
        display: inline-block;
        margin-left: 1rem;
        margin-right: 1rem;
        font-size: 14px;
      }
      @media screen and (min-width: 40em) {
        .c-navbar__left {
          text-align: left;
          width: 50%;
        }
        .c-navbar__left img {
          width: 133.7px;
        }
        .c-navbar__right {
          display: block;
          float: left;
          width: 0%;
          text-align: center;
          width: 50%;
        }
      }
    `}</style>
  </nav>
)
