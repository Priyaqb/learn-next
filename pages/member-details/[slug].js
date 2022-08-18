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
          src={member.imgSrc}
          alt={member.name}
          width = {500}
          height = {500}
          layout = 'responsive'
          className = 'pb-2'
        />
        <p className="flex flex-row">
          <span className="pr-2 block">Experience:</span>
          <span>{member.experience}</span>
        </p>
        <p className="flex flex-row">
          <span className="pr-2 block">Stream:</span>
          <span>{member.category}</span>
        </p>
        <p className="flex flex-row">
          <span className="pr-2 block">Project:</span>
          <span>{member.project}</span>
        </p>
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
