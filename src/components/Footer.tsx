export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12 mt-16">
      <div className="absolute inset-0 bg-gradient-to-t from-brand/5 to-transparent" />
      <div className="container relative">
        <div className="text-center">
          <div className="inline-block mb-4">
            <div className="text-2xl font-bold gradient-text">Saverio Filippelli</div>
          </div>
         
          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <span>© {new Date().getFullYear()}</span>
            <span>•</span>
            <span>All rights reserved</span>
         
          </div>
        </div>
      </div>
    </footer>
  )
}
