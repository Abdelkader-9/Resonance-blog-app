import Categories from "@/components/Categories"
import Feature from "@/components/Feature"
import Hero from "@/components/Hero"
import Quotes from "@/components/Quote"



const  Home= () => {
  return (
    <div className="min-h-screen">
      <Hero/>
      <Feature/>
      <Categories/>
      <Quotes/>
    </div>
  )
}

export default Home