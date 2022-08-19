import Link from 'next/link'
import categoryList from "../categories"
import Title from "../components/title/title"



// posts will be populated at build time by getStaticProps()
export default function Home({ Categories }) {
  return (
    <>
      <Title>TEAMS</Title>
      <ul>
        {Categories.map((category, index) => (
          <li key={index}>
            <Link href={`/member/${category.slug}`}>
              <a className="text-sm">{category.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  const Categories = categoryList;

  return {
    props: {
      Categories
    },
  }

}
