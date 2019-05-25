import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'

import Head from 'next/head'
import Hero from '../components/Hero'
import MiniCard from '../components/MiniCard'

// TODO: Use shared `gql` across frontend/backend

const allHostsQuery = gql`
  query {
    Hosts {
      id
      name
      about
      avatar
      url
    }
  }
`

export default () => (
  <>
    <Head>
      <title>
        Hotfix - Curating the best Programming videos by developers for
        developers
      </title>
    </Head>
    <Hero />
    <main>
      <h2 className='h3'>
        Our hand-curated <em>Screencasters</em>
      </h2>
      <p>
        We love those people—and you will too—because they shares so many great
        tutorials for Web Developer in Bahasa. Help us to reach more people if
        your favorite ones is not listed here yet.
      </p>
      <div className='o-hosts__container'>
        <Query query={allHostsQuery}>
          {({ loading, error, data: { Hosts } }) => {
            if (error) return <p>Something went wrong and We have no idea :(</p>
            if (loading) return <p>Loading...</p>
            return Hosts.map(host => (
              <MiniCard
                key={host.id}
                title={host.name}
                description={host.about}
                image={host.avatar}
                placeholder={host.name === ''}
                cta={{ title: 'View', url: host.url }}
              />
            ))
          }}
        </Query>
      </div>
      <style jsx>
        {`
          main {
            margin-bottom: 8rem;
            text-align: center;
          }
          p {
            margin: auto;
            margin-top: 10px;
            width: 90%;
          }
          .o-hosts__container {
            display: grid;
            margin-top: 4rem;
            margin-bottom: 10px;
            grid-template-columns: 50% 50%;
          }
          @media screen and (min-width: 64em) {
            main {
              padding: 2rem;
            }
            p {
              width: 40%;
            }
            .o-hosts__container {
              grid-template-columns: 20% 20% 20% 20% 20%;
            }
          }
          @media screen and (min-width: 48em) and (max-width: 64em) {
            p {
              width: 66.6%;
            }
            .o-hosts__container {
              grid-template-columns: 33% 33% 33%;
            }
          }
        `}
      </style>
    </main>
  </>
)
