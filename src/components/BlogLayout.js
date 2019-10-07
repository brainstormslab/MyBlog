import React from 'react'
import {
  View,
  Link,
  NotFoundBoundary,
  useLoadingRoute,
} from 'react-navi'
import siteMetadata from '../siteMetadata'
import NotFoundPage from './NotFoundPage'
import LoadingIndicator from './LoadingIndicator'
import styles from './BlogLayout.module.scss'
import Bio from './Bio'

function BlogLayout({ blogRoot, isViewingIndex }) {
  let loadingRoute = useLoadingRoute()

  return (
    <div className={styles.container}>
      <LoadingIndicator active={!!loadingRoute} />

      {// Don't show the header on index pages, as it has a special header.
      !isViewingIndex && (
        <header>
          <h3 className={styles.title}>
            <Link href={blogRoot}>{siteMetadata.title}</Link>
          </h3>
        </header>
      )}
      <div className={styles.wrapper}>
        <div className={styles.row}>
          <div className={styles.column}>
            <div className={styles.leftcolumn}>
              <Bio />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.centercolumn}>
              <main>
                <NotFoundBoundary render={() => <NotFoundPage />}>
                  <View />
                </NotFoundBoundary>
              </main>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.rightcolumn}>
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
            </div>
          </div>
      </div>
      </div>
    </div>
  )
}

export default BlogLayout
