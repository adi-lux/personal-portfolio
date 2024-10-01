import Image from 'next/image';
import Link from 'next/link';

export default function ResponsiveCard({
  img,
  alt,
  title,
  description,
  link,
}: {
  img: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}) {
  return (
    <div className=" card md:card-side bg-base-100 shadow-sm border-2 border-base-300/15 hover:border-base-300/45">
      <figure>
        <Image src={img} alt={alt} width="300" height="300" />
      </figure>
      <div className="card-body max-w-xl ">
        <h3 className="card-title text-2xl underline text-primary-content">
          <Link
            className="hover:text-primary/80 active:text-primary"
            href={link}
          >
            {title}
          </Link>
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
