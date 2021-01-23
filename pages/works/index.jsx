import renderToString from 'next-mdx-remote/render-to-string';
import hydrate from 'next-mdx-remote/hydrate';
import fs from 'fs';
import path from 'path';
import Button from '../../components/button';
import matter from 'gray-matter';

export default function Works({ source }) {
  const content = hydrate(source);
  return (
    <div>
      <Button />
      {content}
    </div>
  );
}

// export async function getStaticPaths({ locales }) {
//   const params = locales.map((locale) => {
//     const map = {}
//     const workDirectory = path.join(process.cwd(), `works/${locale}`);
//     const fileNames = fs.readdirSync(workDirectory);
//     fileNames.forEach(fileName=>{
//       const values = {
//         id:fileName,
//         locale
//       }

//     })
//   });
//   console.log(params);
//   return {
//     paths: params,
//     fallback: true,
//   };
// }

// export async function getStaticPaths({ locales }) {
//   let paths = [];
//   locales.forEach((locale) => {
//     let map = {};
//     const workDirectory = path.join(process.cwd(), `works/${locale}`);
//     const fileNames = fs.readdirSync(workDirectory);
//     fileNames.forEach((fileName) => {
//       map.params = { id: fileName };
//     });
//     map.locale = locale;
//     console.log(map);
//     paths.push(map);
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

export async function getStaticProps({ locale, params }) {
  const workDirectory = path.join(process.cwd(), 'works');
  const source = fs.readFileSync(
    `${workDirectory}/${locale}/sample.mdx`,
    'utf8'
  );
  const { content, data } = matter(source);
  const mdxSource = await renderToString(content);
  return { props: { source: mdxSource, frontMatter: data } };
}
