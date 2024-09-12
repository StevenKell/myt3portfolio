import Link from "next/link";





const mockUrls = [
  "https://utfs.io/f/239a2815-eedb-49b0-b4c1-d4e8a77a45d3-b9zy5u.png",
  "https://utfs.io/f/0475427c-56d8-4462-bed6-ec65f81e7083-saqhwg.png",
  "https://utfs.io/f/01d966b8-1089-4eea-9d8c-887a5585321f-pf8os.png",
  "https://utfs.io/f/80fbf5f5-07c7-4a7f-8f2c-5fe039fa4a80-f4rkiy.png",
  "https://utfs.io/f/31209c23-4c17-454b-8f2d-0a203aa86769-oup5el.png",
  "https://utfs.io/f/e7858140-31ff-4eed-962a-6a74aff26433-q8jlar.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
   return (
    <main className="">
      <div className="flex flex-wrap">{
        mockImages.map((image) => (
          <div key={image.id} className="w-48 p-4">
            <img src={image.url} alt="image" />
         </div> ))
         }

      </div>
        
      </main>
    
  );
}
