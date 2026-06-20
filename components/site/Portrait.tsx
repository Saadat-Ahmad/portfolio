import Image from "next/image";

/** The hero portrait: a warm duotone photo with orange/brick overlays. */
export default function Portrait() {
  return (
    <div className="cursor-grow relative aspect-[4/5] overflow-hidden bg-paper-deep">
      <Image
        src="/profile.jpg"
        alt="Syed Saadat Ahmad"
        fill
        priority
        sizes="(max-width: 1024px) 90vw, 420px"
        className="object-cover object-top grayscale contrast-[1.08] sepia-[0.18]"
      />
      <div className="pointer-events-none absolute inset-0 bg-orange/20 mix-blend-multiply" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brick/35 via-transparent to-transparent mix-blend-multiply" />
    </div>
  );
}
