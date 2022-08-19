
export default function Title({ children }) {

  return (
    <>
    <h3 className="text-2xl text-center font-semibold 
            bg-gradient-to-r bg-clip-text  text-transparent 
            from-black via-black-400 to-black-100
            animate-text">{ children }</h3>
    </>
  )
}