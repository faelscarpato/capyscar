/**
 * HeroPhoto
 * Foto em PNG transparente sobre o canvas WebGL
 * Interage visualmente via transform (sem tocar no WebGL)
 */

import Image from "next/image";

export default function HeroPhoto() {
  return (
    <div
      className="
        hero-photo-wrapper
        relative
        pointer-events-none
      "
    >
      <Image
        src="/images/rafael-portrait.png" // PNG recortado, fundo transparente
        alt="Rafael Scarpato"
        width={520}
        height={700}
        priority
        className="
          hero-photo
          select-none
        "
      />
    </div>
  );
}
