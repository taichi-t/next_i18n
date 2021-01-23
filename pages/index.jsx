import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '../components/button';
import { useIntl } from 'react-intl';

export default function IndexPage() {
  const { locale } = useRouter();
  const { formatMessage: f } = useIntl();
  return (
    <>
      <Button />
      <p>{f({ id: 'title' })}</p>
      <Link href={{ pathname: '/works' }} locale={locale}>
        to sample.mdx
      </Link>
    </>
  );
}
