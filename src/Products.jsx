import ProductCard from "./ProductCard"


export default function Product(){



    return(

        <div className="grid gap-12">
        <div className="py-10  flex justify-center items-center bg-black">
            <h2 className="text-white font-bold text-3xl">OUER NEW COLLECTION</h2>
        </div>


       <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
        <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />
         <ProductCard />

        </div>
        </div>
    )
}