import Image from "next/image";

export default function ItemCard({ thumbnail, name, price }) {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="relative shadow-sm bg-white">
      <div className="w-60 h-40 bg-cyan-900 overflow-hidden relative shadow-md">
        <Image
          src={thumbnail}
          className="object-cover w-full h-full"
          layout="fill"
          alt=""
        />
      </div>
      <div className="p-3">
        <h4 className="text-md text-cyan-800 font-normal text-left">{name}</h4>
      </div>
      <h5 className="absolute bg-cyan-200 top-0 right-0 -translate-y-1/2 p-2 text-cyan-500 text-lg font-medium shadow-md">
        {formatter.format(price)}
      </h5>
    </div>
  );
}
