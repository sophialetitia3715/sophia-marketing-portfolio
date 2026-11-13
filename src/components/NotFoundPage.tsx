import { Link } from '@tanstack/react-router'

export function NotFoundPage() {
  return (
    <div className="container-editorial flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow mb-6 text-rose-deep">404</p>
      <h1 className="text-6xl md:text-8xl">
        This page is <span className="display-italic text-rose-deep">still a draft.</span>
      </h1>
      <Link to="/" className="btn btn-dark mt-10">
        Back to home
      </Link>
    </div>
  )
}
