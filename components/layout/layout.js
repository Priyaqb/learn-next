import Header from '../header/header'
export default function Layout({ children }) {
    return (
      <>
        <div className="flex h-screen justify-center flex-col">
          <Header />
          <main className="h-full flex align-center justify-center">
            <div className="bg-orange text-white w-1/4 p-3 m-auto rounded-lg">
              {children}
            </div>
          </main>
        </div>
      </>
    )
  }