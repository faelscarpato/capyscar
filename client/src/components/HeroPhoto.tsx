/**
 * HeroPhoto
 * Foto em PNG transparente sobre o canvas WebGL
 * Interage visualmente via transform (sem tocar no WebGL)
 */


export default function HeroPhoto() {
  return (
    <div
      className="
        hero-photo-wrapper
        relative
        pointer-events-none
      "
    >
      <img
        src="/images/rafael-portrait.png" // PNG recortado, fundo transparente
        alt="Rafael Scarpato"
        width={520}
        height={700}
        loading="eager"
        className="
          hero-photo
          select-none
        "
      />
    </div>
  );
}

