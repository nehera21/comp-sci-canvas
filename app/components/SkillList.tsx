import React from 'react';
import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import Skill, { SkillProps } from './Skill';

export type SkillListProps = {
  skills: SkillProps[];
};
export default function SkillList(props: SkillListProps) {
  return (
    <Box pt="30px" id="skills">
      <Heading size="2xl" pb="6" pt="15" pl="9">
        Skills
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={5} pt="3" pl="9">
        {props.skills.map((skill: SkillProps) => {
          return (
            <GridItem key={skill.name}>
              <Skill {...skill} />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}
