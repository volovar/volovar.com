import React from 'react'

const NoRoute = ({ location }) => (
    <div>
        <h2>404</h2>
        <h3>No page found at { location.pathname }</h3>
    </div>
)

export default NoRoute