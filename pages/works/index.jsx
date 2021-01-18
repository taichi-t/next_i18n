import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import fs from 'fs';
import path from 'path'
import Button from '../../components/button'

  


export default function Works({ source }) {
  const content = hydrate(source)
  return <div >
    <Button/>
    {content}
    </div>
}

export async function getStaticProps({locale,params}) {
  const workDirectory = path.join(process.cwd(), 'works');
  const source = fs.readFileSync(`${workDirectory}/${locale}/sample.md`, 'utf8')
  const mdxSource = await renderToString(source)
  return { props: { source: mdxSource } }
}