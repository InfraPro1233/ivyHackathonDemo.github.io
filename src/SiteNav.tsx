import { useEffect, useRef, useState, type ReactNode } from 'react'

const links = [
  { id: 'how', label: 'Explore questions' },
  { id: 'capabilities', label: 'Meet Ivy' },
  { id: 'demo', label: 'See it in action' },
]

export function SiteNav({ brand }: { brand: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const nav = useRef<HTMLElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      if (window.scrollY < 200) setActive('')
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
    }, { rootMargin: '-20% 0px -55% 0px' })
    links.forEach(link => {
      const section = document.getElementById(link.id)
      if (section) observer.observe(section)
    })
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus() }
    }
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !nav.current?.contains(event.target)) setOpen(false)
    }
    const onResize = () => { if (window.innerWidth >= 760) setOpen(false) }
    window.addEventListener('keydown', onKey)
    window.addEventListener('pointerdown', onPointer)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('pointerdown', onPointer)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  return (
    <header className="site-header">
      <nav ref={nav} aria-label="Main navigation" className={`site-nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
        <a className="nav-brand" href="#top" aria-label="Ivy home" onClick={() => setOpen(false)}>{brand}<span>Your curious companion</span></a>
        <button ref={toggle} type="button" className="nav-toggle" aria-expanded={open} aria-controls="site-nav-links" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(value => !value)}>
          <span /><span />
        </button>
        <div id="site-nav-links" className="nav-links">
          {links.map(link => <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} onClick={() => setOpen(false)}>{link.label}{link.id === 'demo' && <span aria-hidden="true">↗</span>}</a>)}
        </div>
      </nav>
    </header>
  )
}
