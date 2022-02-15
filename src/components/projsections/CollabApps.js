import React from 'react';
import { ProjectFlexContainer } from '../AllProjects';
import SingleProject from '../SingleProject';
export const CollabApps = () => {
  return (
    <ProjectFlexContainer id='Collaborative-Apps-container' className='single-proj-type-container'>
      <SingleProject title="Universal Movies" projectImg="marvelousMovies" about="See the latest and top rated movies, providing user's the ability to search for movies and watch trailers." newTools={[]} improvements={[]} sourceCode="https://github.com/bdejene19/MarvelousMoviesIndex" webpage='https://bdejene19.github.io/MarvelousMoviesIndex/'></SingleProject>
    </ProjectFlexContainer>
  )
}
