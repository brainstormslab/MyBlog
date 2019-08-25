import * as Navi from 'navi'

export default Navi.route({
  title: "Full Stack Developer",
  getView: () => import('./document.mdx'),
})