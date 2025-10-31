import { albumsData } from "~/data/albumsData";
import {
  CardBody,
  CardContainer,
  CardItem,
} from "../components/ui/shadcn-io/3d-card";

const Albums = () => {
  return (
    <div>
      <h2 className="text-4xl md:text-6xl font-chrono text-center mt-20">
        Albums
      </h2>

      <div className="flex flex-wrap justify-center gap-20 py-8">
        {albumsData.map((album) => (
          <CardContainer
            key={album.id}
            className="inter-var"
            containerClassName="py-8"
          >
            <CardBody className="bg-black relative group/card hover:shadow-2xl border-gray-400 w-auto sm:w-2xl h-auto rounded-xl p-4 border">
              {/* Album Title */}
              <CardItem
                translateZ="50"
                className="text-2xl md:text-4xl font-bold text-white"
              >
                {album.title}
              </CardItem>

              {/* Release Year */}
              <CardItem
                as="p"
                translateZ="60"
                className="text-xl max-w-sm mt-2 text-neutral-300"
              >
                Release {album.releaseYear}
              </CardItem>

              {/* Cover Image */}
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={album.coverImage}
                  height="1000"
                  width="1000"
                  className="w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={album.title}
                />
              </CardItem>

              {/* Buttons */}
              <div className="flex justify-between items-center mt-16">
                <CardItem
                  translateZ={20}
                  as="a"
                  href={album.youtubeLink}
                  target="_blank"
                  className="hover:scale-105 px-4 py-2 rounded-xl text-m font-normal bg-red-800 hover:text-white hover:bg-red-500"
                >
                  YouTube
                </CardItem>

                <p className="text-white">Listen Now</p>

                <CardItem
                  translateZ={20}
                  as="a"
                  href={album.bandcampLink}
                  target="_blank"
                  className="hover:scale-105 px-4 py-2 rounded-xl text-m font-normal bg-blue-800 hover:text-white hover:bg-blue-500"
                >
                  Bandcamp
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
};

export default Albums;
