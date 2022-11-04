import Head from "next/head";

import Navbar from "components/Navbar";
import SearchBar from "components/SearchBar";
import ItemScroller from "components/ItemScroller";

import houses from "mock/houses";
import automobiles from "mock/automobiles";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lokah</title>
        <meta
          name="description"
          content="Aluguel e compra de TUDO que você imaginar"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto min-h-screen overflow-hidden">
        {/* Main Section */}
        <div className="my-5 md:my-10 px-3">
          <h3 className="px-3 text-xs sm:text-sm md:text-md font-semibold text-cyan-600">
            O que você está procurando?
          </h3>
          <SearchBar />
        </div>

        <div className="px-6">
          <ItemScroller name="Imóveis" items={houses} />
          <ItemScroller name="Automóveis" items={automobiles} />
        </div>
      </main>
    </div>
  );
}
