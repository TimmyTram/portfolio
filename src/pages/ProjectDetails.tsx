import { useParams } from 'react-router-dom';
import { projects } from '../constants/constants';
import TechIcon from '../components/TechIcon';
import { techIconMap } from '../constants/techIconMaps';

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded shadow-md">
          <p className="font-medium">Project not found</p>
          <p className="text-sm mt-1">The requested project could not be located.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 md:py-12">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg shadow-lg p-6 mb-8 border-6 border-royal-gold-solid">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h1>
        <p className="text-blue-100 text-lg">{project.description}</p>

        {/* Role Badge - if role exists */}
        {project.role && (
          <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-800 text-white">
            {project.role.title}
          </div>
        )}
      </div>



      {/* Main Content */}
      <div className="bg-royal-blue-opacity rounded-lg shadow-md overflow-hidden border-6 border-royal-gold-solid">
        {/* Project Image */}
        <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden border-b-6 border-royal-gold-solid">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Details */}
        <div className="p-6 md:p-8">

          {/* Project Links */}
          {project.links && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
                Project Links
              </h2>
              <div className="flex flex-wrap gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                    Demo Video
                  </a>
                )}
              </div>
            </section>
          )}
          {/* Motivation Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
              Motivation
            </h2>
            <p className="text-white leading-relaxed">{project.motivation}</p>
          </section>

          {/* Role Section - if role exists */}
          {project.role && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
                My Role: {project.role.title}
              </h2>
              <p className="text-white leading-relaxed mb-4">{project.role.description}</p>

              <h3 className="text-xl font-semibold text-white mb-2">Responsibilities:</h3>
              <ul className="space-y-2">
                {project.role.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 mt-1">
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-white">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Features Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
              Features
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-600 mr-3">
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Technologies Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
              Technologies
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {project.technologies.map((tech, index) => (
                techIconMap[tech] && (
                  <div key={index} className="flex flex-col items-center rounded-lg p-3 hover:shadow-md transition-shadow">
                    <TechIcon tech={tech} size={60}>
                      {techIconMap[tech]}
                    </TechIcon>
                  </div>
                )
              ))}
            </div>
          </section>

          {/* Challenges Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
              Challenges
            </h2>
            <ul className="space-y-3">
              {project.challenges.map((challenge, index) => (
                <li key={index} className="rounded-lg p-4 text-white">
                  <div className="font-medium text-white mb-1">Challenge {index + 1}</div>
                  {challenge}
                </li>
              ))}
            </ul>
          </section>

          {/* Lessons Learned Section - if lessons exist */}
          {project.lessons && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
                Lessons Learned
              </h2>
              <div className="bg-blue-800 bg-opacity-30 rounded-lg p-5 border-l-4 border-blue-500">
                <ul className="space-y-3">
                  {project.lessons.map((lesson, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-500 text-white mr-3 flex-shrink-0 mt-0.5">
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-white">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          )}

          {/* Future Improvements Section - if futureImprovements exist */}
          {project.futureImprovements && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
                Future Improvements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.futureImprovements.map((improvement, index) => (
                  <div key={index} className="bg-blue-900 bg-opacity-40 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                      <span className="text-blue-300 font-medium">Improvement {index + 1}</span>
                    </div>
                    <p className="text-white">{improvement}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Additional Resources Section - if additionalResources exist */}
          {project.additionalResources && (
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <span className="inline-block w-1 h-6 bg-blue-600 mr-3"></span>
                Additional Resources
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.additionalResources.map((resource, index) => (
                  <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-800 text-white">
                    {resource}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;