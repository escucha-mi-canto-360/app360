import { AspectRatio } from '@chakra-ui/react'
//jszJDavxwJI

export const Video = ({videoId}) => {
    const videoUrl = `https://www.youtube.com/embed/${videoId}`
  return (
    <AspectRatio maxW='xl' ratio={16/9}>
    <iframe
        title='Video Aves'
        src={videoUrl} 
        allowFullScreen
    />
    </AspectRatio>
  )
}
