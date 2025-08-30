export function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}

export function formatDateRange(start?: string, end?: string) {
  if (!start && !end) return ''
  if (start && !end) return `${start} – Present`
  if (!start && end) return end
  return `${start} – ${end}`
}
