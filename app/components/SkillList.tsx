import React from 'react';
import { Box, Heading, Grid, GridItem } from '@chakra-ui/react';
import Skill from './Skill';

type SkillType = {
  image: string;
  name: string;
  color: string;
};

type SkillListProps = {
  skills: SkillType[];
  id: string;
};

export default function SkillList({ skills, id }: SkillListProps) {
  return (
    <Box pt="30px">
      <Heading size="2xl" pb="6" pt="15" pl="9" id={id}>
        Skills
      </Heading>
      <Grid templateColumns="repeat(3, 1fr)" gap={5} pt="3" pl="9">
        {skills.map((skill) => (
          <GridItem key={skill.name}>
            <Skill {...skill} />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}
