import { aboutArticles } from "@/lib/data"
import Image from "next/image"
import * as motion from "motion/react-client";
const Articles = () => {
  return (
     <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto ">
                    {aboutArticles.map((article,index)=>{
                        return(
                                <motion.div 
                                                        key={article.id}
                                                        initial={{ opacity: 0, y: 20 }}
                                                        whileInView={{ opacity: 1, y: 0 }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 py-10  "
                                                        >
                                                                   <div className="mb-5">
                                    <Image src={article.image} 
                                    alt={article.title}
                                     width={600}
                                     height={600}
                                     className="rounded-2xl transition duration-500 ease-in-out hover:-translate-y-2 "
                                     />
                                </div>
                                 <div>
                                     <h1 className="font-bold text-2xl mb-2 font-serif hover:text-primary">
                                        {article.title}
                                        </h1>
                                <p className="font-semibold text-sm sm:text-lg text-muted-foreground ">
                                    {article.paragraph}
                                    </p>
                                 </div>
                     </motion.div>
                         
                        )
                    })}
            </div>
        </section>
  )
}

export default Articles