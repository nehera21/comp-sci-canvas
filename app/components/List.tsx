import React from 'react'
import {Box, Heading} from '@chakra-ui/react'
import Project from './Item'

export default function List(props : any) {
    return (
        <Box 
            pl={['2', '4', '6']}
            pt='10' 
            w='100%' 
            maxW='800px' 
            mx='auto'
        >
            <Heading 
                size={['xl', '2xl']}
                pl={['2', '3']} 
                pb='8' 
                pt='5' 
                id={props.id}
            >
                {props.title}
            </Heading>
            {props.projects.map((project : any) => <Project {...project} />)}
        </Box>
    )
}