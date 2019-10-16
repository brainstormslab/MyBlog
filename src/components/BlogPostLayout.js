import React from 'react'
import { Link, useCurrentRoute, useView } from 'react-navi'
import { MDXProvider } from '@mdx-js/react'
import ArticleMeta from './ArticleMeta'
import styles from './BlogPostLayout.module.scss'

function BlogPostLayout({ blogRoot }) {
  let { title, data, url } = useCurrentRoute()
  let { connect, content, head } = useView()
  let { MDXComponent, readingTime } = content

  // The content for posts is an MDX component, so we'll need
  // to use <MDXProvider> to ensure that links are rendered
  // with <Link>, and thus use pushState.
  return connect(
    <>
      {head}
      <article className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            <Link href={url.pathname}>{title}</Link>
          </h1>
          <ArticleMeta
            blogRoot={blogRoot}
            meta={data}
            readingTime={readingTime}
          />
        </header>
        <MDXProvider components={{
          a: Link,
          wrapper: ({ children }) =>
            <div className={styles.content}>
              {children}
            </div>
        }}>
          <MDXComponent />
        </MDXProvider>
        <footer className={styles.footer}>
          <h3 className={styles.title}>
            <Link href={blogRoot}>
              List All Ideas and Solutions worth Saving
            </Link>
          </h3>
          <section className={styles.links}>
            {
              data.previousDetails &&
              <Link className={styles.previous} href={data.previousDetails.href}>
                ← {data.previousDetails.title}
              </Link>
            }
            {
              data.nextDetails &&
              <Link className={styles.next} href={data.nextDetails.href}>
                {data.nextDetails.title} →
              </Link>
            }
          </section>
        </footer>
      </article>
    </>
  )
}

export default BlogPostLayout