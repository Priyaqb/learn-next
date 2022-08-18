import Link from 'next/link'
import categoryList from "../../categories"
import memberList from "../../members"
import { getDenormalizedCategories } from "../../utils"
import BackNav from '../../components/back/back'




// posts will be populated at build time by getStaticProps()
export default function membersList({ category }) {
  return (
    <>
    <header>
      <BackNav />
    </header>
    <ul>
      {category.members.map((member, index) => (
        <li key={index}>
          <Link href={`/member-details/${member.id}`}>
            <a>{member.name}</a>
         </Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export async function getStaticPaths() {
  const categories = categoryList;
  const paths = categories.map((category) => ({
    params: { slug: category.slug }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const categories = getDenormalizedCategories();
  const category = categories.find((c) => c.slug === slug);
  return {
    props: { category }
  };
}
