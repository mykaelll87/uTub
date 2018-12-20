import React, {Component} from 'react'

export default class Header extends Component{
    render(){
        /* todo Inclure le react router */
        /* todo mettre des liens vers les différentes pages */
        const pages = [{path:"/", name:"Home"}]
        return(
            <header className="red-accent-2" role="navigation">
                <div className="nav-wrapper container">
                <a id="logo-container" href="/" className="brand-logo">µtub</a>
                    <ul className="right hide-on-med-and-down">
                        {pages.map(page=>(
                            <li key={page.path}><a href={page.path}>{page.name}</a></li>
                        ))}
                    </ul>
                    <ul id="nav-mobile" className="side-nav">
                        {pages.map(page=><li key={page.path}><a href={page.path}>{page.name}</a></li>)}
                    </ul>
                </div>
            </header>
        )
    }
}