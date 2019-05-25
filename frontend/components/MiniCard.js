import Link from 'next/link'

const Placeholder = () => (
  <>
    <div className='o-placeholder__avatar' />
    <p className='o-placeholder__title' />
    <p className='o-placeholder__description' />
    <p className='o-placeholder__description' />
    <button className='o-placeholder__button' />
    <style jsx>
      {`
        .o-placeholder__avatar,
        .o-placeholder__title,
        .o-placeholder__description,
        .o-placeholder__button {
          margin: auto;
          max-width: 100%;
          background-color: #ccc;
          display: block;
        }
        .o-placeholder__avatar {
          margin-bottom: 2rem;
          width: 100px;
          height: 100px;
          border-radius: 999px;
        }
        .o-placeholder__title {
          margin-bottom: 1rem;
          border-radius: 3px;
          width: 150px;
          height: 25px;
        }
        .o-placeholder__button,
        .o-placeholder__description {
          margin-bottom: 1rem;
          width: 190px;
          height: 13.37px;
          border-radius: 999px;
        }
        .o-placeholder__button {
          border: 0;
          pointer-events: none;
          margin-top: 1.5rem;
          border-radius: 3px;
          padding-top: 1.3rem;
          padding-bottom: 1.3rem;
        }
      `}
    </style>
  </>
)

export default ({ cta, placeholder, title, description, image }) => {
  return (
    <div className='c-minicard'>
      {placeholder ? (
        <Placeholder />
      ) : (
        <>
          <img className='c-minicard__img' src={image} alt={title} />
          <p>
            <strong>{title}</strong>
          </p>
          <p className='c-minicard__description'>{description}</p>
          {cta && (
            <Link href={cta.url}>
              <a className='c-button'>{cta.title}</a>
            </Link>
          )}
        </>
      )}
      <style jsx>{`
        .c-minicard__description {
          font-size: 14px;
          margin-top: 10px;
          line-height: 1.2rem;
          color: #bbb;
        }
        .c-minicard {
          border: 1px solid #666;
          padding: 15px;
          padding-top: 30px;
          padding-bottom: 30px;
          transition: 0.2s all;
        }
        .c-minicard:hover {
          border-color: #fff;
        }
        .c-minicard:hover > .c-minicard__description {
          color: #fff;
        }
        .c-minicard:hover .c-minicard__img {
          filter: grayscale(0);
        }
        .c-minicard__img {
          margin-bottom: 20px;
          border: 2px solid #ccc;
          border-radius: 999px;
          width: 100px;
          filter: grayscale(100%);
        }
      `}</style>
    </div>
  )
}
