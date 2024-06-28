import Header from "@/components/header";
import Link from "next/link";
import { newsProps } from "../../page";

const getData = async (id: number) => {
  const results = await fetch(`${process.env.NEXT_URL_HTTP}/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return results;
};

const Detalhes = async ({ params: { id } }: { params: { id: number } }) => {
  const item: newsProps = await getData(id);

  return (
    <>
      <Header />
      <main className="flex max-w-5xl w-full mx-auto justify-center">
        <ul>
          <li className="mt-28" key={item.name}>
            <img src={item.image} alt="" className="w-80 h-80 mx-auto" />

            <p className="flex justify-center mt-6 text-lg">{item.name}</p>

            <div className="text-center mt-9 ">
              <h3 className="font-bold text-4xl">Todos os episódios:</h3>

              <div className="bg-slate-400 w-full px-3">
                <ul className="mt-7 text-lg">
                  {item.episode.map((i) => (
                    <>
                      <li className="pb-2">{i}</li>
                    </>
                  ))}
                </ul>
              </div>
              <div className="my-8">
                <Link href={"/"}>
                  <button className="bg-slate-950 text-fuchsia-50 w-full h-10">
                    Voltar ao menu
                  </button>
                </Link>
              </div>

              <div className="my-8">
                <Link href={"https://www.youtube.com/@AdultSwim_Brasil"} target="_blank">
                  <button className="bg-slate-950 text-fuchsia-50 w-full h-10">
                    Acessar os episódios
                  </button>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </main>
    </>
  );
};

export default Detalhes;
