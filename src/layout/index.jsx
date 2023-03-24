import { Footer } from "./Footer"
import { Header } from "./Header"
import { Main } from "./Main"

export const Layout = () => {
  return (
    <><div className="container py-5">
      <Header />

      <Main />

    </div>
    
    <div className="container py-5">

        <Footer />

      </div>
      
      </>

  )
}