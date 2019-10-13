import React from 'react'
import { Link } from 'react-navi'
// import styles from './NavigationOptions.module.scss'

function NavigationOptions(){

    return (
        <div>
            <a
            href='./rss.xml'
            target='_blank'
            style={{ float: 'right' }}>
            RSS
            </a>
            <Link href='./about'>
            About
            </Link> &bull;{' '}
            <Link href='./tags'>
            Tags
            </Link> &bull;{' '}
            <a href='https://github.com/brainstormslab/MyBlog'>
            Source
            </a>
        </div>
    )

}

export default NavigationOptions