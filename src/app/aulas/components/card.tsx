import Image from "next/image";

interface AulasProps {
  title: string,
  description: string;
}

export default function Card(data: AulasProps) {
  return (
    <article className="block">
      <Image
        alt=""
        src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        className="rounded-lg h-64 w-full object-cover sm:h-80 lg:h-96 "
        width={300}
        height={300}
        
      />

      <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">
        {data.title}
      </h3>

      <p className="w-full mt-2 text-gray-700">{data.description}</p>
    </article>
  );
}
