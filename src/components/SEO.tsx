import { Helmet } from 'react-helmet-async'

export function SEO({ title, description }: { title: string; description: string }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  )
}
