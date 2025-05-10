import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-4">
      <h1 className="site-title">My Next.js Site!!!</h1>
      <p className="site-tagline">Converted to Next.js framework.</p>
      <nav className="mt-2 space-x-4">
        <Link className="nav-link" href="/">Home</Link>
        <Link className="nav-link" href="/about">About</Link>
        <Link className="nav-link" href="/style-guide">Style Guide</Link>
      </nav>
    </header>
  )
}
