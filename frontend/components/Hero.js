import Link from 'next/link'

export default () => (
  <div className='o-hero'>
    <div className='o-hero__content'>
      <h1 className='h2'>Curating the best Programming videos</h1>
      <p>By Developers for Developers</p>
      <br />
      <p>
        <Link href='/explore'>
          <a>Explore -></a>
        </Link>
      </p>
    </div>
    <style jsx>
      {`
        .o-hero {
          padding: 2rem;
          height: 90vh;
          width: 100%;
          display: table;
        }
        .o-hero__content {
          display: table-cell;
          vertical-align: middle;
        }
      `}
    </style>
  </div>
)
