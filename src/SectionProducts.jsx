import ProductCard from "./ProductCard"
import { Link } from "react-router-dom"


export default function SectionProducts(){




    return(

    
    
    <section className="py-16 bg-gray-50">
  
  
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
      Our Services
    </h2>
    <p className="mt-3 text-gray-600">
      Discover what we offer for your business
    </p>
    <Link className="text-blue-700" to="/products">Show more ...</Link>
  </div>

 
  <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
<ProductCard />
      </div>
  
</section>
    
    

    )
}