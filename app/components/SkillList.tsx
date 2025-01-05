import React from 'react';
import {
  Box,
  Heading,
  Grid,
  GridItem,
  useBreakpointValue,
} from '@chakra-ui/react';
import Skill, { SkillProps } from './Skill';

export type SkillListProps = {
  skills: SkillProps[];
  id: string;
};
export default function SkillList(props: SkillListProps) {
  const columns = useBreakpointValue({
    sm: 'repeat(2, 1fr)',
    md: 'repeat(3, 1fr)',
    lg: 'repeat(4, 1fr)',
  });

  const gaps = useBreakpointValue({
    sm: 6,
    md: 8,
    lg: 8,
  });

  const padding = useBreakpointValue({
    sm: '6',
    md: '8',
    lg: '10',
  });

  return (
    <Box pt="45px">
      <Heading size={['lg', 'xl', '2xl']} pb="6" pl={padding} id="skills">
        Skills
      </Heading>
      <Grid templateColumns={columns} gap={gaps} pt="3" pl={padding} pr="2">
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
