export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-700 py-6">
      <div className="container text-sm text-slate-700 dark:text-slate-300">
        © {new Date().getFullYear()} Saverio Filippelli. All rights reserved.
      </div>
    </footer>
  )
}
