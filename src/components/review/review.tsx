import Image from "next/image"

interface ReviewProps{
  image: string
  name: string,
  description: string
}

export default function Review( {image, name, description}: ReviewProps){
    return(
        <a href="#" className="block rounded-md border border-gray-300 p-4 shadow-sm sm:p-6">
  <div className="sm:flex sm:justify-between sm:gap-4 lg:gap-6">
    <div className="sm:order-last sm:shrink-0">
      <Image
        alt=""
        src={image}
        className="size-16 rounded-full object-cover sm:size-[72px]"
        width={72}
        height={72}
      />
    </div>

    <div className="mt-4 sm:mt-0">
      <h3 className="text-lg text-sm text-pretty text-gray-900">
      {description}
      </h3>

      <p className="mt-1 text-sm text-gray-700">{name}</p>
    </div>
  </div>

  <dl className="mt-6 flex gap-4 lg:gap-6">
    <div className="flex items-center gap-2">
      <dt className="text-gray-700">
        <span className="sr-only"> Published on </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
          />
        </svg>
      </dt>

      <dd className="text-xs text-gray-700">31/06/2025</dd>
    </div>
  </dl>
</a>
    )
}