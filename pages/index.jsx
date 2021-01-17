import * as React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Button from '../components/button'

export default function IndexPage () {
  const {locale}= useRouter()
  return (
    <>
<Button/>
  <p>index page</p>
  <Link href={{pathname:"/works"}} locale={locale}>to sample.mdx</Link>
  </>
  );
}