import React from 'react';
import styled from "styled-components";
import {SkillBox} from "./skillBox/SkillBox";
import {FlexWrapper} from "../../../../../components/FlexWrapper";
import skillsImg from "../../../../../assets/images/skillsImg.webp"
import {Container} from "../../../../../components/Container";
import {BaseTitle} from "../../../../../components/titles/BaseTitle";
import {StyledLine} from "../../../../../styles/line/Line";
import {SkillBoxType} from "../../../../../types/types";
import {myTheme} from "../../../../../styles/Theme.styled";
import {Fade} from "react-awesome-reveal";

const languages = [
    "TypeScript", "Lua", "Python", "JavaScript"
]

const dataBase = [
    "SQLite", "PostgreSQL", "Mongo"
]

const other = [
    "HTML", "CSS", "EJS", "SCSS", "REST", "Jinja"
]

const tools = [
    "VSCode", "Neovim", "Linux", "Figma", "XFCE", "Arch", "Git", "Font", "Awesome"
]

const frameworks = [
    "React", "Vue", "Disnake", "Discord.js", "Flask", "Express.js"
]

const GroupsSkills: Array<SkillBoxType> = [
    {
        skillBoxTitle: "Tools",
        boxSkills: tools,
        maxWidth: "198px"
    },
    {
        skillBoxTitle: "Frameworks",
        boxSkills: frameworks,
        maxWidth: "198px"
    },
    {
        skillBoxTitle: "DataBase",
        boxSkills: dataBase,
        maxWidth: "180px"
    },
    {
        skillBoxTitle: "Other",
        boxSkills: other,
        maxWidth: "180px"
    },
    {
        skillBoxTitle: "Languages",
        boxSkills: languages,
        maxWidth: "180px"
    },
]

export const Skills = () => {
    return (
        <StyledSkillsSection>
            <Container>
                <FlexWrapper align={"center"}>
                    <BaseTitle titleText={"skills"}></BaseTitle>
                    <StyledLine lineWidth={"239px"}></StyledLine>
                </FlexWrapper>
                <StyledSkillsContent justify={"space-between"}>
                    <Photo src={skillsImg} alt={"skillsImg"}/>
                    <StyledSkills direction={"column"} wrap={"wrap-reverse"} justify={"flex-start"} align={"flex-end"}>
                        <Fade cascade={true} damping={0.2}>
                            {GroupsSkills.map((skillBox, index) => {
                                return <SkillBox key={index} skillBoxTitle={skillBox.skillBoxTitle} boxSkills={skillBox.boxSkills}
                                                 maxWidth={skillBox.maxWidth}/>
                            })}
                        </Fade>
                    </StyledSkills>
                </StyledSkillsContent>
            </Container>
        </StyledSkillsSection>
    );
};

const StyledSkillsSection = styled.section`
    position: relative;
`

const StyledSkillsContent = styled(FlexWrapper)`
  padding-top: 25px;

  @media (max-width: 950px) {
    justify-content: center;
  }
`

const Photo = styled.img`
  height: 100%;
  max-width: 349px;
  object-fit: cover;
  position: relative;

  @media (max-width: 950px) {
    display: none;
  }
  
`

const StyledSkills = styled(FlexWrapper)`
  gap: 16px;
  max-height: 300px;

  @media ${myTheme.media.tablet} {
    max-height: 500px;
  }

  @media ${myTheme.media.mobile} {
    max-height: 700px;
  }
`

// const StyledColumnSkills = styled(FlexWrapper)`
//   gap: 16px;
// `


//                    <StyledSkills>
//                         <StyledColumnSkills direction={"column"}>
//                             <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}  maxWidth={"178px"}/>
//                         </StyledColumnSkills>
//                         <StyledColumnSkills direction={"column"}>
//                             <SkillBox skillBoxTitle={"DataBase"} boxSkills={dataBase}  maxWidth={"178px"}/>
//                             <SkillBox skillBoxTitle={"Other"} boxSkills={other}  maxWidth={"178px"}/>
//                         </StyledColumnSkills>
//                         <StyledColumnSkills direction={"column"}>
//                             <SkillBox skillBoxTitle={"Tools"} boxSkills={tools} maxWidth={"196px"}/>
//                             <SkillBox skillBoxTitle={"Frameworks"} boxSkills={frameworks}  maxWidth={"196px"}/>
//                         </StyledColumnSkills>
//                     </StyledSkills>


//                        <SkillBox skillBoxTitle={"Tools"} boxSkills={tools} maxWidth={"196px"}/>
//                         <SkillBox skillBoxTitle={"Frameworks"} boxSkills={frameworks}  maxWidth={"196px"}/>
//                         <SkillBox skillBoxTitle={"DataBase"} boxSkills={dataBase}  maxWidth={"178px"}/>
//                         <SkillBox skillBoxTitle={"Other"} boxSkills={other}  maxWidth={"178px"}/>
//                         <SkillBox skillBoxTitle={"Languages"} boxSkills={languages}  maxWidth={"178px"}/>