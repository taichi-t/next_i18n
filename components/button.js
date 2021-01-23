import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Button({ children }) {
  const { locale, pathname } = useRouter()
  return (
    <Link href={pathname} locale={locale === "en-US" ? "ja-JP" : "en-US"}>
      <button
        style={{
          borderRadius: '3px',
          border: '1px solid black',
          color: 'black',
          padding: '0.5em 1em',
          cursor: 'pointer',
          fontSize: '1.1em',
        }}
      >
        {children}
      </button>
    </Link>
  )
}
