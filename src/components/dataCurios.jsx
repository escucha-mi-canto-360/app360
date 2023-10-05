import {
  List,
  ListItem,
} from '@chakra-ui/react'

export const DataCurios = props => {
  const { id, info } = props
    
  return (
      <>
        <List spacing={3}>
          <ListItem className='text-justify mb-4'>
            {id}-{info}
          </ListItem>
        </List>
      </>

   
  )
}
