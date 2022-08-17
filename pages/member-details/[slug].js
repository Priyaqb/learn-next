import Link from 'next/link'
import memberList from "../../members"
import BackNav from '../../components/back/back'
import Image from 'next/image'



// posts will be populated at build time by getStaticProps()
export default function memberDetail({ member }) {

  return (
    <>
      <BackNav />
      <div>
        <Image
          src="https://images.unsplash.com/photo-1484800089236-7ae8f5dffc8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80"
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <span>{member.experience}</span>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const members = memberList;
  const paths = members.map((member) => ({
    params: { slug : member.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const members = memberList;
  const member = members.find((c) => c.id.toString() === slug);
  return {
    props: { member }
  };
}
