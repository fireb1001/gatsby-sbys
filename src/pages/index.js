import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'

export default () => (
    
    <div >
        <Header h1="Hello gatsby !" />
        <Link style={{ color: `purple`, fontSize: `22px` }} to="/about/">About</Link>
        <h1>test</h1>
    </div>
)
