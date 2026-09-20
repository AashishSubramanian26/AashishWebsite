import { useState } from "react";
import {
  Box,
  Image,
  IconButton,
  Flex,
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface MediaCarouselProps {
  items: string[];
}

const isVideo = (src: string) => /\.(mov|mp4)(?:[?#].*)?$/i.test(src);

export const MediaCarousel = ({ items }: MediaCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  // Keep the selected index valid if the media list changes.
  const index = Math.min(currentIndex, Math.max(items.length - 1, 0));
  const currentItem = items[index];

  const prevItem = () => {
    setCurrentIndex(
      (index - 1 + items.length) % items.length
    );
  };

  const nextItem = () => {
    setCurrentIndex((index + 1) % items.length);
  };

  // Shared thumbnail navigation for both views.
  const renderThumbnails = (expanded = false) => (
    <Flex
      gap={2}
      overflowX="auto"
      maxW="100%"
      py={2}
      px={1}
      align="center"
    >
      {items.map((item, itemIndex) => (
        <Box
          as="button"
          type="button"
          key={`${item}-${itemIndex}`}
          aria-label={`Show ${
            isVideo(item) ? "video" : "image"
          } ${itemIndex + 1}`}
          aria-pressed={index === itemIndex}
          flexShrink={0}
          width={expanded ? "80px" : "64px"}
          height={expanded ? "56px" : "48px"}
          overflow="hidden"
          borderRadius="md"
          border="2px solid"
          borderColor={
            index === itemIndex
              ? expanded
                ? "white"
                : "blue.600"
              : "transparent"
          }
          opacity={index === itemIndex ? 1 : 0.65}
          cursor="pointer"
          onClick={() => setCurrentIndex(itemIndex)}
          _hover={{ opacity: 1 }}
          _focusVisible={{
            outline: "3px solid",
            outlineColor: "blue.300",
            outlineOffset: "2px",
          }}
        >
          {isVideo(item) ? (
            <Flex
              height="100%"
              align="center"
              justify="center"
              bg="blue.700"
              color="white"
              fontSize="xs"
            >
              ▶ Video
            </Flex>
          ) : (
            <Image
              src={item}
              alt=""
              width="100%"
              height="100%"
              objectFit="cover"
            />
          )}
        </Box>
      ))}
    </Flex>
  );

  if (!currentItem) {
    return (
      <Flex height="100%" align="center" justify="center">
        <Text>No media available.</Text>
      </Flex>
    );
  }

  return (
    <>
      {/* Regular project-page carousel */}
      <Flex
        direction="column"
        width="100%"
        height="100%"
        gap={2}
      >
        <Box
          position="relative"
          width="100%"
          flex="1"
          minH={0}
          rounded="3xl"
          overflow="hidden"
        >
          {isVideo(currentItem) ? (
            <>
              <Box
                as="video"
                key={currentItem}
                src={currentItem}
                controls
                playsInline
                width="100%"
                height="100%"
                objectFit="contain"
              />

              <Button
                position="absolute"
                top={3}
                right={3}
                size="sm"
                colorScheme="blue"
                onClick={onOpen}
              >
                Expand ↗
              </Button>
            </>
          ) : (
            <Box
              as="button"
              type="button"
              display="block"
              width="100%"
              height="100%"
              onClick={onOpen}
              aria-label="Open image in large viewer"
              cursor="zoom-in"
              _focusVisible={{
                outline: "3px solid",
                outlineColor: "blue.600",
                outlineOffset: "-3px",
              }}
            >
              <Image
                src={currentItem}
                alt={`Project image ${index + 1}`}
                width="100%"
                height="100%"
                objectFit="cover"
              />

              <Box
                position="absolute"
                bottom={3}
                right={3}
                bg="blackAlpha.700"
                color="white"
                px={3}
                py={1}
                borderRadius="md"
                fontSize="xs"
                pointerEvents="none"
              >
                Click to expand ↗
              </Box>
            </Box>
          )}
        </Box>

        <Flex align="center" gap={2} flexShrink={0}>
          <IconButton
            icon={<BiChevronLeft size={30} />}
            onClick={prevItem}
            aria-label="Previous media"
            isDisabled={items.length < 2}
            bg="secondary_blue"
            color="white"
            flexShrink={0}
            _hover={{ bg: "blue.600" }}
          />

          <Flex flex="1" minW={0} justify="center">
            {renderThumbnails()}
          </Flex>

          <IconButton
            icon={<BiChevronRight size={30} />}
            onClick={nextItem}
            aria-label="Next media"
            isDisabled={items.length < 2}
            bg="secondary_blue"
            color="white"
            flexShrink={0}
            _hover={{ bg: "blue.600" }}
          />
        </Flex>
      </Flex>

      {/* Expanded media viewer */}
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="full"
        motionPreset="none"
      >
        <ModalOverlay bg="blackAlpha.900" />

        <ModalContent
          bg="#101820"
          color="white"
          m={0}
          height="100dvh"
          minH="100dvh"
          overflow="hidden"
          onKeyDown={(event) => {
            // Leave native video keyboard controls intact.
            if (
              (event.target as HTMLElement).tagName === "VIDEO"
            ) {
              return;
            }

            if (event.key === "ArrowLeft") {
              event.preventDefault();
              prevItem();
            } else if (event.key === "ArrowRight") {
              event.preventDefault();
              nextItem();
            }
          }}
        >
          <ModalHeader
            fontSize="md"
            py={4}
            pr={16}
            flexShrink={0}
          >
            Project media — {index + 1} / {items.length}
          </ModalHeader>

          <ModalCloseButton
            aria-label="Close media viewer"
            top={3}
            right={3}
          />

          <ModalBody
            display="flex"
            flexDirection="column"
            flex="1"
            minH={0}
            px={{ base: 3, md: 6 }}
            pb={4}
          >
            {/* Large image/video with arrows on either side */}
            <Flex
              position="relative"
              flex="1"
              minH={0}
              align="center"
              justify="center"
              overflow="hidden"
              px={{ base: 12, md: 16 }}
            >
              <IconButton
                position="absolute"
                left={0}
                top="50%"
                transform="translateY(-50%)"
                icon={<BiChevronLeft size={32} />}
                onClick={prevItem}
                aria-label="Previous media"
                isDisabled={items.length < 2}
                colorScheme="blue"
                zIndex={2}
              />

              {isVideo(currentItem) ? (
                <Box
                  as="video"
                  key={`expanded-${currentItem}`}
                  src={currentItem}
                  controls
                  playsInline
                  width="100%"
                  height="100%"
                  objectFit="contain"
                />
              ) : (
              <Image
                src={currentItem}
                alt={`Project image ${index + 1}, expanded`}
                width="100%"
                height="100%"
                objectFit="contain"
                onClick={onClose}
                cursor="zoom-out"
              />
              )}

              <IconButton
                position="absolute"
                right={0}
                top="50%"
                transform="translateY(-50%)"
                icon={<BiChevronRight size={32} />}
                onClick={nextItem}
                aria-label="Next media"
                isDisabled={items.length < 2}
                colorScheme="blue"
                zIndex={2}
              />
            </Flex>

            {/* Thumbnails remain at the bottom */}
            <Flex
              justify="center"
              pt={3}
              flexShrink={0}
              minW={0}
            >
              {renderThumbnails(true)}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};