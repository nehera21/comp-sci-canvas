import React from 'react';
import { Box, Heading, Grid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import Skill from "./Skill";

export default function SkillList(props: any) {
    const columns = useBreakpointValue({
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
    });

    const gaps = useBreakpointValue({
        sm: 6,
        md: 8,
        lg: 10,
    });

    const padding = useBreakpointValue({
        sm: '4',
        md: '6',
        lg: '9',
    });

    return (
        <Box pt='30px'>
            <Heading 
                size={['lg', 'xl', '2xl']} 
                pb='6' 
                pt='15' 
                pl={padding} 
                id='skills'
            >
                Skills
            </Heading>
            <Grid 
                templateColumns={columns}
                gap={gaps}
                pt='3' 
                pl={padding}
            >
                {props.skills.map((skill: any) => { 
                    return (
                        <GridItem key={skill.name}>
                            <Skill {...skill} />
                        </GridItem>
                    )
                })}
            </Grid>
        </Box>
    )
}
