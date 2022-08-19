import { useRouter } from 'next/router'


// posts will be populated at build time by getStaticProps()
export default function backNav({ member }) {
  const router = useRouter()

  return (
    <>
      <button type="button" onClick={() => router.back()} className="pb-2 text-dark-blue font-bold">
        <i class="fa fa-arrow-left" aria-hidden="true"></i> Back
      </button>
    </>
  )
}