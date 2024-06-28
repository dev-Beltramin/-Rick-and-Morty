import Header from "@/components/header";
import Link from "next/link";

export type newsProps = {
  id: number;
  name: string;
  status: string 
  species: string 
  

  origin: {
    name: string;
    url: string;
  };

  location:{
    name: string
  }

  image: string;

  episode: string[]
};

const getData = async () => {
   const published = await fetch(`${process.env.NEXT_URL_HTTP}`)
   .then((res)=> res.json())
   .then((data =>{
    return data.results
   }))
   return published
};



export default async function Home() {
  const items: newsProps[] = await getData();

  return (
    <main className="">
      <Header />
      <section>
        <div>
          <ul className="grid grid-cols-3 pt-40 max-w-5xl mx-auto gap-x-10 gap-y-10">
            {Array.isArray(items) &&
              items.map((item) => (
                <>
                  <li key={item.id}>
                    <img
                      src={item.image}
                      alt="imagem da noticia"
                      className=" w-full mb-5"
                    />
                    <p className="w-80 text-lg mb-4 ">{item.name}</p>
                    <div className="flex justify-center w-full bg-slate-950 text-fuchsia-50 py-1 rounded-lg ">
                      <Link href={`/detalhes/${item.id}`}>
                        {" "}
                        <button>Saiba mais</button>
                      </Link>
                    </div>
                  </li>
                </>
              ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
