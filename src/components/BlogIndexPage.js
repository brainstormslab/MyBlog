import React from 'react'
import { Link } from 'react-navi'
import siteMetadata from '../siteMetadata'
import ArticleSummary from './ArticleSummary'
import Pagination from './Pagination'
import styles from './BlogIndexPage.module.scss'

function BlogIndexPage({ blogRoot, pageCount, pageNumber, postRoutes }) {
  return (
    <div>
      <header>
        <h1 className={styles.title}>
          <Link href={blogRoot}>{siteMetadata.title}</Link>
        </h1>
      </header>
      <ul className={styles.articlesList}>
        {postRoutes.map(route =>
          <li key={route.url.href}>
            <ArticleSummary blogRoot={blogRoot} route={route} />
          </li>
        )}
      </ul>
      {
        pageCount > 1 &&
        <Pagination
          blogRoot={blogRoot}
          pageCount={pageCount}
          pageNumber={pageNumber}
        />
      }
      
    </div>
  )
}

export default BlogIndexPage