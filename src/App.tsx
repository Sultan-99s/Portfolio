import { display_img, img_1, img_2, cv_pdf, img_3 } from "./media";


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
            src={img_3}
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
                      href={cv_pdf}
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
                    src={img_1}
                    alt="Working on AI Project"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={img_2}
                    alt="Conference Presentation"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={img_2}
                    alt="Team Collaboration"
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden">
                  <img 
                    src={display_img}
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
                REMP: A unique dataset of rare and endangered medicinal plants in Bangladesh for sustainable healing and biodiversity conservation
              </h3>
              <p className="text-gray-400 mb-4">
                Published in Data in Brief (Elsevier), 2024. DOI: 10.1016/j.dib.2024.110895
              </p>
              <p className="text-gray-300 mb-4">
                Developed a dataset of 3,494 annotated images from 16 rare medicinal plant species in Bangladesh through fieldwork and photography. Organized and prepared the dataset for machine learning applications to aid in biodiversity conservation.
              </p>
              <a href="https://www.sciencedirect.com/science/article/pii/S2352340924008588#:~:text=Data%20Article-,REMP%3A%20A%20unique%20dataset%20of%20rare%20and%20endangered%20medicinal%20plants,sustainable%20healing%20and%20biodiversity%20conservation" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
                Read Paper <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>

            {/* Publication 2 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Machine Learning Model to Define Water Potability Considering Distinctive Chemical Contaminants
              </h3>
              <p className="text-gray-400 mb-4">
                Published in Springer Conference on Intelligent Computing and Optimization, 2023. DOI : 10.1007/978-3-031-73318-5_3
              </p>
              <p className="text-gray-300 mb-4">
                Developed a hybrid meta-learning and few-shot learning model to predict drinking water potability based on diverse chemical contaminants, achieving up to 98% accuracy. The model supports water supply departments in ensuring water quality prior to distribution.
              </p>
              <a href="https://link.springer.com/chapter/10.1007/978-3-031-73318-5_3" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
                Read Paper <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            {/* Publication 3 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Integration of Deep Learning Based Image Analysis in Lung Cancer Pathology
              </h3>
              <p className="text-gray-400 mb-4">
                Published in 2024 International Conference on Innovations in Science, Engineering and Technology (ICISET). DOI : 10.1109/ICISET62123.2024.11003919
              </p>
              <p className="text-gray-300 mb-4">
                Conducted deep learning-based analysis on lung histopathology Whole Slide Images (WSIs) for tumor segmentation and classification, creating a dataset of ~200,000 processed image patches. Applied CNN, FCN, clustering, and PCA techniques, achieving 85.05% accuracy with the CNN model.
              </p>
              <a href="https://ieeexplore.ieee.org/document/11003919" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
                Read Paper <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            {/* Publication 4 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                 An E-Commerce Website Accessibility Issue Detection and Evaluation System
              </h3>
              <p className="text-gray-400 mb-4">
                Presented at The 15th International Conference of Human-Computer Interaction (HCI). DOI : 10.13140/RG.2.2.30468.64645
              </p>
              <p className="text-gray-300 mb-4">
                Developed an automated system to detect and evaluate accessibility issues in e-commerce websites, focusing on improving user experience for individuals with disabilities. The system analyzes HTML elements and accessibility attributes to ensure compliance with web accessibility standards.
              </p>
              <a href="https://www.researchgate.net/publication/387410840_An_E-Commerce_Website_Accessibility_Issue_Detection_and_Evaluation_System" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
                Read Paper <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            {/* Publication 5 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-2">
                Strategies for Effective Malware Analysis and Detection Using Machine Learning Algorithms
              </h3>
              <p className="text-gray-400 mb-4">
                Published in 2024 IEEE International Conference on Computing, Applications and Systems (COMPAS), DOI : 10.1109/COMPAS60761.2024.10797025.
              </p>
              <p className="text-gray-300 mb-4">
                Designed and implemented machine learning-based strategies for effective malware analysis and detection, focusing on behavioral and static feature analysis. The proposed approach enhances early threat identification and system security.
              </p>
              <a href="https://www.researchgate.net/publication/387242618_Strategies_for_Effective_Malware_Analysis_and_Detection_Using_Machine_Learning_Algorithms" target="_blank" className="text-blue-400 hover:text-blue-300 flex items-center">
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