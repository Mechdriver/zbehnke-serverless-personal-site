import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import HomePage from '../components/HomePage'

const Home = () => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="shortcut icon" href="static/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossOrigin="anonymous" />
      <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/grids-responsive-min.css" />
      <link type="text/css" href="static/css/styles.css" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" />
      <script src="https://use.fontawesome.com/424be27a87.js"></script>
      <title>Zachary Behnke</title>
    </Head>

    <HomePage/>
  </div>
)

export default Home
