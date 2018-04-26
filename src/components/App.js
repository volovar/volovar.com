import React from 'react'
import Header from './Header'
import RouterComponent from './RouterComponent'
import Footer from './Footer'
import { css } from 'emotion'

const App = () => (
    <div className={ css`margin: 0 auto; width: 96%;` }>
        <Header />
        <RouterComponent />
        <Footer />
    </div>
)

export default App