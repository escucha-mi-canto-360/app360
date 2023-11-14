import { useContext } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

import { RecorridosContext } from "./../context";

import { DataCurios } from "./dataCurios";
import { Video } from "./video";
import { CarouselTransition } from "./CarouselTransition";

// eslint-disable-next-line react/prop-types
const ModaInfo = ({ mediaHotspot }) => {
  const { title, subTitle, imageIntial, videoId } = mediaHotspot;

  const context = useContext(RecorridosContext);

  const data = context.dataCurios[1];

  //parseo de imagenes objeto a array

  const imagesData = context.dataMediaHostpot;

  //const image = imagesData.map((objeto) => objeto);

  function eliminarElementosVacios(arr) {
    return arr.filter((elemento) => {
      if (Array.isArray(elemento)) {
        // Si el elemento es un array, llamamos a la función recursivamente
        return eliminarElementosVacios(elemento).length > 0;
      } else {
        // Filtramos elementos que no sean arrays vacíos
        return elemento !== "" && elemento !== null && elemento !== undefined;
      }
    });
  }
  // Llama a la función para eliminar elementos vacíos
  const images = eliminarElementosVacios(imagesData);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "400px", lg: "400px", sm: "200px" }}
        src={imageIntial}
        alt="Caffe Latte"
      />

      <Stack minW="xl">
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text py="2">{subTitle}</Text>
          <Box maxW="xl">
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <b>Datos Curiosos:</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  <div className="h-48 overflow-y-scroll scrollbar-thumb-blue-500 scrollbar-track-gray-300">
                    {data && data.length
                      ? data.map((product) => (
                          <DataCurios
                            key={product.id}
                            id={product.id}
                            info={product.info}
                          />
                        ))
                      : null}
                  </div>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      <b>Imagenes</b>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel>
                  {/*  <ImageCarousel images={images} /> */}
                  <CarouselTransition images={images} />
                </AccordionPanel>
              </AccordionItem>
              {videoId ? (
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <b>Video</b>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel>
                    <Video videoId={videoId} />
                  </AccordionPanel>
                </AccordionItem>
              ) : null}
            </Accordion>
          </Box>
        </CardBody>
        <CardFooter></CardFooter>
      </Stack>
    </Card>
  );
};

export default ModaInfo;
