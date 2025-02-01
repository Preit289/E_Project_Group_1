import { useEffect } from "react";
import "../styles/pages/Gallery.scss";
const Gallery = () => {
  // Setup title for page
  useEffect(() => {
    document.title = "Gallery | KEANSBURG PARK";
  }, []);
  return (
    <>
      <div className="Gallery">
        <p
          style={{
            fontSize: "15pt",
            padding: "50px 0px",
            textAlign: "justify",
            lineHeight: "1.6",
          }}
        >
          <b>(GalleryPage)</b> Immerse yourself in the vibrant tapestry of
          Keanburg Amusement Park through our captivating Gallery, where
          memories and magic are perpetually preserved in stunning visuals. Step
          into a world of dynamic images, each capturing a unique facet of the
          park's excitement, wonder, and unforgettable moments. Our Gallery
          serves as a visual journey through the heart of Keanburg, allowing you
          to relive the thrills, the laughter, and the joy that define our
          park's experience. From adrenaline-pumping roller coasters soaring
          against the sky to the tender smiles of families sharing magical
          moments, our Gallery showcases the kaleidoscope of experiences that
          await. We believe that a picture is worth a thousand words, and we've
          carefully curated this collection to provide a taste of the action and
          ambiance that makes Keanburg so special. Our commitment to your
          enjoyment extends beyond the physical boundaries of the park, with
          this online portal bringing you closer to the magic of Keanburg from
          the comfort of your own screen. Here, you’ll discover not only the
          diverse array of attractions we offer, but also the passion and
          dedication that drive us to create new and exciting memories for our
          valued guests. The design of our Gallery reflects the lively and
          welcoming atmosphere of the park, featuring an engaging layout and
          dynamic visuals that draw you in and spark your imagination. Whether
          you’re a seasoned thrill-seeker eager to relive your favorite ride, or
          a first-time visitor looking to discover what awaits, we encourage you
          to explore our various themed albums, showcasing rides, shows, special
          events, and the countless smiles that are the heartbeat of Keanburg.
          We’re constantly updating our collection, capturing new moments and
          adding new experiences, so be sure to check back frequently for more
          glimpses into the joy and wonder of our park. We invite you to explore
          this online haven of memories and get a taste of the magic that awaits
          you. We believe that a visit to Keanburg is more than just a day at an
          amusement park; it’s about creating shared experiences and forging
          bonds that last a lifetime. From the gentle sway of a classic ride to
          the exhilarating rush of our most daring adventure, the Keanburg
          Amusement Park experience is captured here in its finest form. Our
          Gallery serves as your window into that experience, and we hope you’ll
          browse and reflect upon the laughter, the thrills, and the genuine
          happiness that is Keanburg. We’re confident that you’ll leave our
          gallery with a smile on your face and an eagerness to create memories
          of your own. Thank you for visiting, and we hope to see you soon at
          Keanburg!
        </p>
      </div>
    </>
  );
};

export default Gallery;
