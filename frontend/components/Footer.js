export default () => (
  <footer>
    <div>
      <p>
        &copy; MMXIX. This site is{' '}
        <a href='https://github.com/evilfactorylabs/hotfix'>Open Source</a> and
        Open Data,
        {` `}
        <a href='https://evilfactory.id'>evilfactory</a> rulez.
      </p>
    </div>
    <style jsx>{`
      footer {
        border-top: 1px solid #666;
        text-align: center;
        color: #666;
        font-size: 14px;
        font-family: 'Menlo', 'Hack', monospace;
      }
      div {
        padding: 1.5rem 2rem;
      }
      img {
        filter: brightness(0) invert(1);
        width: 50px;
      }
    `}</style>
  </footer>
)
