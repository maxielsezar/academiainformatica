import Image from "next/image";

type DiagramaProps = {
  src: string;
  alt: string;
};

export default function Diagrama({ src, alt }: DiagramaProps) {
  return (
    <div className="mt-8">
      <div className="p-4 md:p-6 rounded-2xl shadow-md border w-full md:max-w-xl">
        
        <Image
          src={src}
          alt={alt}
          width={600}
          height={800}
          className="rounded-lg w-full h-auto"
        />

      </div>
    </div>
  );
}