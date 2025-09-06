import ContactForm from "@/components/ContactForm"
import Map from "@/components/Map"

const contact = () => {
  return (
    <main>
        <div className="mt-15 mx-auto">
            <h1 className="font-bold text-3xl  text-center font-serif">Contact Us</h1>
        </div>
      <ContactForm/>
      <Map/>
    </main>
    
  )
}

export default contact