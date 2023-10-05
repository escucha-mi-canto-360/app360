import { useState, useContext } from 'react';
import { Pannellum } from 'pannellum-react';
import dataScene from '../helpers/dataScene';
import { UseModal } from '../hook/useModal';
import Modal from '../components/modal';
import ModaInfo from './modaInfo';
import ReactHowler from 'react-howler'
import './../styles/hotspot.css'


import { RecorridosContext } from './../context'


// eslint-disable-next-line react/prop-types
export default function Scene({mediaHotspot, setMediaHotspot}) {
    const { isOpen, openModal, closeModal } = UseModal(false);
    const [scene, setScene] = useState(dataScene['panoOne']);

    
    const context = useContext(RecorridosContext);

    const addMediaHotspot = (data) =>{
        console.log(data.images)
        context.setDataCurios([context.dataCurios, data.dataCurious])
        context.setDataMediaHostpot([context.dataMediaHostpot, data.images])
    }

    const hotSpots = (element, i) => {
        
        const hotspotIcon = (hotSpotDiv) => {
            const image = document.createElement("img");
            image.classList.add("image");
            image.setAttribute("width", "40");
            image.setAttribute("height", "40");
            image.setAttribute(
              "src",
              element.icono
            );
            hotSpotDiv.appendChild(image);
          };

        if (element.cssClass === 'hotSpotElement')
            
            return (
                
                    <Pannellum.Hotspot
                        key={element.id}
                        type="custom"
                        pitch={element.pitch}
                        yaw={element.yaw}
                        tooltip={hotspotIcon}
                        handleClick={() => {
                            openModal(), 
                            setMediaHotspot(element.media)
                            addMediaHotspot(element.media)
                        }}
                        cssClass={element.cssClass}
                    />
            );

        else if (element.cssClass === 'moveScene')
            return (
                
                    <Pannellum.Hotspot
                        key={i}
                        type="custom"
                        pitch={element.pitch}
                        yaw={element.yaw}
                        handleClick={() => { setScene(dataScene[element.scene]); }}
                        cssClass={element.cssClass}
                    />
               
                
            );
            
    }
    
    return(
        <>
         <Pannellum
                width={'100%'}
                height={'100vh'}
                title={scene.title}
                image={scene.image}
                pitch={-16.28}
                yaw={-1.66}
                hfov={110}
                autoLoad
                showControls={false}
                showFullscreenCtrl={true}
                showZoomCtrl={false}
                mouseZoom={true}
                orientationOnByDefault={false}
                hotspotDebug={false}
            >
                {Object.values(scene.hotSpot).map((element, i) => (hotSpots(element, i)))}
            </Pannellum>
            <Modal isOpen={isOpen} close={() => closeModal()}>
                {isOpen && <ModaInfo mediaHotspot={mediaHotspot}/>} 
            </Modal>
            <ReactHowler src={scene.soundEscena} playing={true} loop={true}/>
        </>
    )
}