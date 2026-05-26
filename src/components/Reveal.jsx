import { useEffect, useRef } from 'react'

/**
 * Wraps children in a div that fades + slides in when it enters the viewport.
 * @param {string}  className  Extra Tailwind classes forwarded to the wrapper
 * @param {number}  delay      Transition-delay in ms (e.g. 100, 200 …)
 * @param {string}  as         HTML tag to render (default: 'div')
 */
export default function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('active')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
