import { useState } from "react";
import { Box, Image, IconButton, SimpleGrid } from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

export const MediaCarousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the previous item
  const prevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // Move to the next item
  const nextItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Check if a file is a video (based on file extension)
  const isVideo = (src) => /\.(mov|mp4)$/i.test(src);

  return (
    <Box position="relative" width="100%" height="100%">
      <Box
        position="relative"
        width="100%"
        rounded="3xl"
        overflow="hidden"
        height="85%"
      >
        {isVideo(items[currentIndex]) ? (
          <Box
            as="video"
            width="100%"
            height="100%"
            controls
            src={items[currentIndex]}
          />
        ) : (
          <Image
            src={items[currentIndex]}
            alt="carousel content"
            width="100%"
            height="100%"
            objectFit="cover"
          />
        )}
      </Box>
      <IconButton
        position="absolute"
        bottom="0%"
        left="5px"
        transform="translateY(-50%)"
        icon={<BiChevronLeft size={30} color="white" />}
        onClick={prevItem}
        aria-label="Previous"
        zIndex="10"
        // borderWidth={2}
        // borderColor="secondary_blue"
        bgColor="secondary_blue"
      />
      <IconButton
        position="absolute"
        bottom="0%"
        right="5px"
        transform="translateY(-50%)"
        icon={<BiChevronRight size={30} color="white" />}
        onClick={nextItem}
        aria-label="Next"
        zIndex="10"
        // borderWidth={2}
        // borderColor="secondary_blue"
        bgColor="secondary_blue"
      />

      <Box
        width="80%"
        justifySelf={"center"}
        overflowX="auto"
        whiteSpace="nowrap"
        scrollBehavior="smooth"
        justifyContent={"center"}
        display="flex"
      >
        <SimpleGrid
          columns={3}
          marginTop="10px"
          display="inline-flex"
          gap={2}
          minWidth="max-content"
        >
          {items.map((item, index) => (
            <Box
              key={index}
              minWidth="50px"
              height="50px"
              overflow="hidden"
              borderRadius="md"
              border={currentIndex === index ? "2px solid" : "none"}
              borderColor="secondary_blue"
              cursor="pointer"
              onClick={() => setCurrentIndex(index)}
            >
              {isVideo(item) ? (
                <Box as="video" src={item} width="100%" height="100%" />
              ) : (
                <Image
                  src={item}
                  width="100%"
                  height="100%"
                  objectFit="cover"
                />
              )}
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
