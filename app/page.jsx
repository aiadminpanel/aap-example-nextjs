export const dynamic = 'force-dynamic'

export default function Page() {
  return (
    <main>
      <h1>Next.js</h1>
      <p>Rendered on the server at {new Date().toISOString()}, like the apps v0 generates.</p>
      <p>Marker: <code>aap-example:nextjs</code></p>
    </main>
  )
}
