import Image from "next/image";

import image1 from "../../assest/nextjs_hero.jpeg";
import Navbar from "@/components/Navbar";

const GalleryPage = () => {
  return (
    <div>
        <Navbar/>
      <h1 className="text-2xl text-center">Gallery Page</h1>
      <div className="my-10 flex flex-col items-center justify-center">
        <Image
          src="https://images.ctfassets.net/23aumh6u8s0i/3jY4eCzPqbJ8bP7RX8SnTe/d6252025eff38698a5ed4ffdbd02f580/nextjs_hero"
          alt="image"
          width={800}
          height={800}
        />
        <h1>Next JS Local Image Component</h1>
        <Image src={image1} alt="next image" width={800} height={800} />
      </div>
    </div>
  );
};

export default GalleryPage;
