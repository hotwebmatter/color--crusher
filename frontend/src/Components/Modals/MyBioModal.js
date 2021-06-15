import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'

import ColorContext from '../../ColorContext'

import './MyBioModal.css'

const MyBioModal = () => {
    const values = useContext(ColorContext)

    const myEmail = 'sirscavo@gmail.com'

    return (
        <div className='fullBioDiv'>
            <div className='bioDiv'>
                <div className='myPic'></div>

                <div className='bioTextDiv'>
                    <div className='bioFancyDiv upperFancy'></div>
                    <div className='bioText upperBioText'>
                        Robin Scavo is a web developer with a
                        heavy inclination for UX/UI. He lives in Missoula,
                        Montana and is currently accepting job offers.
                    </div>
                    <div className='bioFancyDiv upperFancy'></div>
                </div>

                <div className='bioTextDiv lowerBioDiv'>
                    <div className='bioFancyDiv'></div>
                    <div className='bioText'>
                        When not building apps like<br/><span className='krazyFont'>
                        Color Crusher</span> Robin can usually be found traveling.<br/><br/>
                        {/* <Link className='emailLink' href={`mailto:${myEmail}`}>Email Robin Scavo</Link> */}
                        <a className='emailLink' href={`mailto:${myEmail}`}>Email Robin Scavo</a>
                    </div>
                    <div className='bioFancyDiv'></div>
                </div>
            </div>

            <div className='contactProjectDiv'>
                <div className='contactText topText'></div>

                <button className='bioBackButton' onClick={() => {
                    values.toggleBioModal();
                    values.toggleMainModal();
                }}>Home</button>

                <div className='contactDiv'>
                    <div className='linkedIn' onClick={() => window.open('https://www.linkedin.com/in/robin-scavo-0617881b5/')}></div>
                    <div className='websiteLink'>Robin's Website Link</div>
                    <div className='gitHub' onClick={() => window.open('https://github.com/RobinScavo')}></div>
                </div>
                <h1 className='contactText'>Robin's Other Projects</h1>

                <div className='projectDiv'>
                    <div className='sfsgDiv' onClick={() => window.open('https://so-fresh-so-green.herokuapp.com/')}>
                        <div className='sfsgLink'></div>
                        <div className='projectText'><span className='sfsgTextLink'>So Fresh So Green</span> <br/>is an
                        online community of farmers and gardeners. Create your own
                        post or comment and upvote.<br/>
                        <span className='sfsgSpan'> CONTRIBUTERS: </span><br/>
                        Danny Pong, Maximos Salzman and Kyle Barthelmes.</div>
                    </div>

                    <div className='openBookDiv' onClick={() => window.open('https://openbook-app.herokuapp.com/')}>
                        <div className='openBookLink'></div>
                        <div className='projectText'><span className='openBookTextLink'>Open Book </span><br/>is an open source
                        project allowing teachers FREE access to remote learning
                        resources. Build classes, create lessons and share those lessons online.
                        <span className='openBookSpan'> CONTRIBUTERS: </span><br/>
                         Phil Ling, Brandon Perry and Jacob Grooms.</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MyBioModal;
