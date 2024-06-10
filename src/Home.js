import React from 'react';
import useFetch from './useFetch';
import ProjectList from './ProjectList';

const Home = () => {
  const { error, isPending, data: projects } = useFetch('http://localhost:8000/projects');

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { projects && (
        <div>
          <ProjectList projects={projects} />
          <button className="bg-white w-100 rounded-md font-medium my-6 mx-auto px-6 py-3">Hello</button>

        </div>
      )}
    </div>
  );
}

export default Home;