import React from 'react';

import { Brain, Github, Linkedin, Mail, FileText, ChevronRight, Code2, Database, LineChart, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-800/80 backdrop-blur-sm shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-semibold">Sultan Moheuddin</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#publications" className="text-gray-300 hover:text-blue-400 transition-colors">Publications</a>
              <a href="#contact" className="text-gray-300 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gray-900 pt-16 min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="images/image_1.jpg"
            alt="AI Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/95 to-gray-900/90"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="relative pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Junior AI/ML Engineer</span>
                  <span className="block text-blue-400">Specializing in Computer Vision & NLP</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Passionate about leveraging artificial intelligence to solve real-world problems. 
                  Experienced in deep learning, computer vision, and natural language processing.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start space-x-4">
                  <div className="rounded-md shadow">
                    <a href="#contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors">
                      Get in touch
                    </a>
                  </div>
                  <div>
                    <a href="#projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-400 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-colors">
                      View Projects
                    </a>
                  </div>
                  <div>
                    <a 
                      href="Public/Sultan_Moheuddin.pdf" 
                      download
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      <FileText className="w-5 h-5 mr-2" />
                      Download CV
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">About Me</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Background & Expertise
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-gray-300">
                With a strong foundation in mathematics and computer science, I'm dedicated to pushing the boundaries of AI technology.
                My journey in AI/ML began during my undergraduate studies and has evolved into a passion for developing innovative solutions.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Connect With Me</h3>
                <div className="flex flex-col space-y-3">
                  <a href="mailto:sultan.shaon99@yahoo.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                    <Mail className="h-5 w-5 mr-2" />
                    Email Me
                  </a>
                  <a href="https://github.com/Sultan-99s/" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                    <Github className="h-5 w-5 mr-2" />
                    GitHub Profile
                  </a>
                  <a href="https://www.linkedin.com/in/md-sultan-moheuddin" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              {/* Add your video here */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <video 
                  className="w-full"
                  controls
                  poster="YOUR_VIDEO_THUMBNAIL_URL"
                >
                  <source src="YOUR_VIDEO_URL" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <div className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Add your additional photos here */}
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="images/display.jpg"
                    alt="Working on AI Project"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="images/photo_2.jpeg"
                    alt="Conference Presentation"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="images/image_1.jpg"
                    alt="Team Collaboration"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src="images/image_3.jpg"
                    alt="Research Lab"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Brain className="h-6 w-6" />
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg leading-6 font-medium text-white">Machine Learning</h3>
                    <p className="mt-2 text-sm text-gray-400">
                      TensorFlow, PyTorch, Scikit-learn
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg leading-6 font-medium text-white">Programming</h3>
                    <p className="mt-2 text-sm text-gray-400">
                      Python, R, SQL, JavaScript
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                    <Database className="h-6 w-6" />
                  </div>
                  <div className="mt-5 text-center">
                    <h3 className="text-lg leading-6 font-medium text-white">Data Engineering</h3>
                    <p className="mt-2 text-sm text-gray-400">
                      Pandas, NumPy, Apache Spark
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Projects</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Featured Work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <img 
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Neural Network Visualization"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Computer Vision for Medical Imaging</h3>
                <p className="text-gray-400 mb-4">Deep learning model for automated disease detection in medical images using PyTorch.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400">Python, PyTorch</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    View Project <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <img 
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="NLP Project"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">NLP Text Analysis Platform</h3>
                <p className="text-gray-400 mb-4">Sentiment analysis and text classification system using BERT transformers.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400">Python, TensorFlow</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    View Project <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105">
              <img 
                className="w-full h-48 object-cover"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Data Analysis"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2">Time Series Prediction</h3>
                <p className="text-gray-400 mb-4">Advanced forecasting model using LSTM networks for financial data analysis.</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-400">Python, Keras</span>
                  <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                    View Project <ExternalLink className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section id="publications" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Publications</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Research Work
            </p>
          </div>

          <div className="space-y-8">
            {/* Publication 1 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Advances in Computer Vision for Medical Imaging Analysis
              </h3>
              <p className="text-gray-400 mb-4">
                Published in International Journal of Medical Imaging, 2024
              </p>
              <p className="text-gray-300 mb-4">
                A comprehensive study on applying deep learning techniques to medical image analysis, 
                focusing on early disease detection and diagnosis.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                Read Paper <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>

            {/* Publication 2 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Natural Language Processing in Healthcare
              </h3>
              <p className="text-gray-400 mb-4">
                Conference Paper, AI in Healthcare Summit 2023
              </p>
              <p className="text-gray-300 mb-4">
                Exploring the applications of NLP in processing medical records and improving 
                patient care through automated analysis.
              </p>
              <a href="#" className="text-blue-400 hover:text-blue-300 flex items-center">
                Read Paper <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Contact</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Get In Touch
            </p>
          </div>

          <div className="max-w-lg mx-auto">
            <form className="space-y-6" action="https://formspree.io/f/xaneajza"  method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name='name'
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name='email'
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name='message'
                  rows={4}
                  className="mt-1 block w-full rounded-md bg-gray-800 border-gray-700 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-white"
                  placeholder="Your message..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <div className="fixed bottom-0 right-0 p-4 flex space-x-4">
        <a href="https://github.com/Sultan-99s/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
          <Github className="h-6 w-6" />
        </a>
        <a href="https://www.linkedin.com/in/md-sultan-moheuddin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href="mailto:sultan.shaon99@yahoo.com" className="text-gray-400 hover:text-blue-400 transition-colors">
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </div>
  );
}

export default App;