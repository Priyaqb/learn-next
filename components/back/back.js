import { useRouter } from 'next/router'


// posts will be populated at build time by getStaticProps()
export default function backNav({ member }) {
  const router = useRouter()

  return (
    <>
    <header>
        <button type="button" onClick={() => router.back()}>
          Back
        </button>
    </header>
    </>
  )
}