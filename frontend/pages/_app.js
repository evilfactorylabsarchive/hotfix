import App, { Container } from 'next/app'
import { ApolloProvider } from 'react-apollo'
import NProgress from 'nprogress'
import Router from 'next/router'

import withApolloClient from '../lib/with-apollo-client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

class MyApp extends App {
  render() {
    const { Component, pageProps, apolloClient } = this.props

    return (
      <Container>
        <Navbar />
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
        <Footer />
        <style jsx global>{`
          ::selection {
            background-color: #fff;
            color: #000;
          }
          * {
            padding: 0;
            margin: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Inter';
            color: #fff;
            background-color: #000;
            font-size: 16px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          h1,
          .h1 {
            font-size: 48px;
          }
          h2,
          .h2 {
            font-size: 36px;
          }
          h3,
          .h3 {
            font-size: 24px;
          }
          p {
            line-height: 1.6rem;
          }
          a {
            color: #fff;
            text-decoration: none;
            outline: 0;
          }
          a:focus,
          a:hover {
            opacity: 0.8;
          }
          a:focus {
            box-shadow: rgba(7, 136, 222, 0.4) 0px 0px 0px 3px,
              rgba(67, 90, 111, 0.14) 0px 0px 0px 1px inset,
              rgba(67, 90, 111, 0.3) 0px -1px 1px 0px inset;
          }
          .c-button {
            border-radius: 3px;
            border: 1px solid #666;
            padding: 10px;
            display: block;
            margin-left: 0.666rem;
            margin-right: 0.666rem;
            margin-top: 1.5rem;
            text-transform: uppercase;
            letter-spacing: 1px;
            font-size: 14px;
            transition: 0.2s all;
          }
          .c-button:hover {
            border-color: #fff;
            color: #000;
            background-color: #fff;
          }
        `}</style>
      </Container>
    )
  }
}

export default withApolloClient(MyApp)
