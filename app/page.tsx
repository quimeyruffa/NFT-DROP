import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Sepolia } from "@thirdweb-dev/chains";
import Link from "next/link";
import { Post } from "../typings";
import { ThirdwebProvider } from "./components/ThirdwebProvider";

export default async function Home() {
  const getServerSideProps = async () => {
    const query = `*[_type == "post"]{
      _id,
      title,
      address,
      description,
      nftCollectionName,
      mainImage{
        asset
      },
      previewImage{
        asset
      },
      slug{
        current
      },
      author ->{
        _id,
        name,
        address,
        slug{
          current
        },
      },
    }`;

    const post = await client.fetch(query);

    return post as Post[];
  };
  const post = (await getServerSideProps()) as Post[];
  return (
    <ThirdwebProvider activeChain={Sepolia} clientId={process.env.CLIENT_ID}>
      <div className="max-w-7xl mx-auto flex-col  flex min-h-screen py-20 px-10 2xl:px-0">
        <h1 className="text-4xl font-sans mb-2">ARTEOFYOU - NFT DROP </h1>
        <main className="bg-slate-100 p-10 shadow-xl shadow-rose-400/20">
          <div className="grid space-x-3 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {post.map((p) => (
              <Link href={`/nft/${p.slug.current}`} key={p.slug.current}>
                <div className="flex flex-col items-center cursor-pointer transition-all duration-200 hover:scale-105 font-sans">
                  <img
                    className="h-96 w-60 rounded-2xl object-cover"
                    src={urlForImage(p.mainImage).url()}
                    alt=""
                  />
                  <div className="p-5">
                    <h2 className="text-3xl">{p.title}</h2>
                    <p className="mt-2 text-sm text-gray-400 font-mono">
                      {p.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </ThirdwebProvider>
  );
}
