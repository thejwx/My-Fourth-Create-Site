export default function Header() {
  return (
    <header className="p-4">
      <h1 className="site-title">My Next.js Site!!</h1>
      <p className="site-tagline">Converted to Next.js framework.</p>
      <nav className="mt-2 space-x-4">
        <a className="nav-link" href="/">Home</a>
        <a className="nav-link" href="/about">About</a>
        <a className="nav-link" href="/style-guide">Style Guide</a>
      </nav>
    </header>
  )
}
