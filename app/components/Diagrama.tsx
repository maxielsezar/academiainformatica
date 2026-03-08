import Image from "next/image";

type DiagramaProps = {
  src: string;
  alt: string;
};


export default function Diagrama({ src, alt }:DiagramaProps) {
  return (
    <div className="mt-8 flex justify-center w-full">
      <div className="bg-white dark:bg-neutral-900 p-4 md:p-6 rounded-2xl shadow-md border w-full max-w-xl">

        <Image
          src={src}
          alt={alt}
          width={900}
          height={1200}
          className="rounded-lg w-full h-auto"
        />

      </div>
    </div>
  );
}