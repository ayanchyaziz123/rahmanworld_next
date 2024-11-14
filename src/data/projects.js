export const projects = [
    {
        slug: 'django-react-e-commerce',
        title: 'Django & React E-commerce',
        date: 'January 2024',
        content: `
          <p>This artifact showcases a comprehensive e-commerce platform built using Django for the backend, React for the frontend, and MySQL as the database. Developed to provide users with a seamless online shopping experience, this project includes essential e-commerce features such as user authentication, product listings, a shopping cart, and an admin dashboard for order management. Additionally, the platform integrates machine learning models to predict laptop prices based on features such as brand, specifications, and historical pricing. This project demonstrates a strong command over full-stack development, database management, and user experience design.</p>
          
          <h3>Artifact Description</h3>
          <h4>Objective</h4>
          <p>The objective of this project was to create an efficient, user-friendly e-commerce application where users can browse, compare, and purchase products. The platform also supports machine learning predictions for dynamic price estimation of laptops.</p>
          
          <h4>Process</h4>
          <p>The project was developed individually, starting with database design in MySQL to store user and product data. Backend logic was built using Django, implementing RESTful APIs for communication with the React frontend. Machine learning models were implemented using Python libraries such as Scikit-Learn and Statsmodels, which allowed the integration of both current and future price predictions for laptops. The frontend was developed in React and styled with Bootstrap to ensure responsiveness. Finally, extensive testing was conducted to ensure smooth user authentication, navigation, and transaction processing.</p>
          
          <h4>Tools and Technologies Used</h4>
          <ul>
            <li>Backend: Django, Django REST Framework</li>
            <li>Frontend: React, Bootstrap</li>
            <li>Database: MySQL</li>
            <li>Machine Learning Libraries: 
              <ul>
                <li>Scikit-Learn: Used for building and training regression models to predict current laptop prices based on specifications.</li>
                <li>Statsmodels: Used for time series analysis to predict future laptop prices by examining historical price trends.</li>
              </ul>
            </li>
            <li>Others: GitHub for version control</li>
          </ul>
          
          <h4>Artifact-Specific Value Proposition</h4>
          <h5>Unique Value</h5>
          <p>This artifact demonstrates expertise in e-commerce application development, showcasing skills in both backend and frontend integration as well as machine learning. It highlights my proficiency in using Django and React, as well as my ability to build and manage databases, create a responsive UI, and integrate predictive models for enhanced functionality.</p>
      
          <h5>Relevance</h5>
          <p>This artifact aligns with my personal value proposition by emphasizing my skills in full-stack development, user-centric design, and the ability to implement machine learning models within a web application. It is relevant to potential employers in e-commerce and software development who seek developers experienced in both backend and frontend technologies with a focus on data-driven insights.</p>
      
          <h4>Customization for Audience</h4>
          <h5>Adaptations Made</h5>
          <p>To appeal to a broader audience, I integrated a predictive pricing model using machine learning to demonstrate advanced technical skills. The platform’s UI was designed to be clean and responsive, ensuring ease of use for both technical and non-technical users.</p>
      
          <h5>Relevance</h5>
          <p>The customizations make the project more pertinent to potential clients and employers looking for developers skilled in building high-quality, user-friendly e-commerce applications with integrated machine learning capabilities.</p>
      
          <h4>Reflection</h4>
          <h5>Significance</h5>
          <p>I chose this project as an artifact because it demonstrates my competency in creating full-stack applications with complex functionality, a strong user experience focus, and advanced data science integration. It illustrates my skills in API development, database management, and machine learning, as well as in responsive design.</p>
      
          <h5>Lessons Learned</h5>
          <p>Developing this artifact enhanced my understanding of full-stack integration, API structuring, data preprocessing, and model training for predictive analytics. I gained proficiency in handling data flow between the backend and frontend, as well as in UI/UX design and machine learning for practical applications.</p>
      
          <h4>Feedback and Revisions</h4>
          <h5>Feedback</h5>
          <p>Feedback was received on improving code efficiency, ensuring better responsiveness, and enhancing the machine learning model’s accuracy. Additional input suggested expanding the admin dashboard for easier order management and better insights into price trends.</p>
      
          <h5>Revisions</h5>
          <p>I optimized the code and improved the UI’s responsiveness. I also refined the predictive model by tuning parameters to increase accuracy and updated the admin dashboard by adding features such as search, filter options, and visualizations for predicted laptop price trends.</p>
          
          <h4>References</h4>
          <ul>
  <li><a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Django Documentation</a></li>
  <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">React Documentation</a></li>
  <li><a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Bootstrap Documentation</a></li>
  <li><a href="https://scikit-learn.org/stable/user_guide.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Scikit-Learn Documentation</a></li>
  <li><a href="https://www.statsmodels.org/stable/index.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Statsmodels Documentation</a></li>
</ul>

        `,
        image: 'https://raw.githubusercontent.com/ayanchyaziz123/final-year-project-main/master/screenshoot/1.Home%20page.png',
        image2: 'https://github.com/ayanchyaziz123/final-year-project-main/raw/master/screenshoot/2.Product%20page.png?raw=true',
        image3: 'https://github.com/ayanchyaziz123/final-year-project-main/raw/master/screenshoot/3.Compare%202%20laptops.png?raw=true',
        description: 'An online store that allows users to browse, search, and purchase products. Includes a machine learning feature for laptop price predictions.',
        technologies: ['Django', 'React', 'MySQL', 'Bootstrap', 'Scikit-Learn', 'Statsmodels'],
        link: '/projects/django-react-e-commerce',
        github: 'https://github.com/ayanchyaziz123/final-year-project-main'
      }
      
, 
    {
        slug: 'personal-online-coding-judge',
        title: 'Personal Online Coding Judge',
        date: 'November 2024',
        content: `
          <p>This project is a dynamic coding judge platform built with Node.js and Express.js for the backend, and React.js for the frontend. It enables users to solve coding problems and get real-time feedback on their submissions.</p>
    
          <h3>Artifact Description</h3>
          <h4>Objective</h4>
          <p>The goal of this project is to create an online platform where users can solve coding problems, submit their solutions, and receive real-time feedback on their code.</p>
          
          <h4>Process</h4>
          <p>The development process involved setting up a secure authentication system using JWT for user management. I implemented the backend API using the MVC pattern for clean and organized code. The frontend was built with React.js and styled using Tailwind CSS to ensure a responsive design.</p>
          
          <h4>Tools and Technologies Used</h4>
          <ul>
            <li>Backend: Node.js, Express.js</li>
            <li>Frontend: React.js</li>
            <li>UI: Tailwind CSS</li>
            <li>Others: GitHub for version control</li>
          </ul>
          
          <h4>Artifact-Specific Value Proposition</h4>
          <h5>Unique Value</h5>
          <p>This project highlights my ability to build interactive platforms using modern JavaScript technologies, while also demonstrating my understanding of full-stack development.</p>
          
          <h5>Relevance</h5>
          <p>This artifact is relevant to employers looking for developers who are proficient in backend and frontend technologies, as well as those interested in building interactive and real-time platforms.</p>
    
          <h4>Customization for Audience</h4>
          <h5>Adaptations Made</h5>
          <p>Features such as a coding problem repository, real-time feedback, and user authentication were added to appeal to coding enthusiasts and educational institutions.</p>
    
          <h5>Relevance</h5>
          <p>This project is tailored to those interested in competitive coding and online learning platforms.</p>
          
          <h4>Reflection</h4>
          <h5>Significance</h5>
          <p>This project is significant because it showcases my ability to develop a full-stack platform that integrates both backend and frontend technologies, along with real-time data processing.</p>
          
          <h5>Lessons Learned</h5>
          <p>Developing this project helped me improve my skills in authentication, API design, and real-time feedback integration.</p>
    
          <h4>Feedback and Revisions</h4>
          <h5>Feedback</h5>
          <p>Feedback focused on enhancing the user interface and adding more problem categories.</p>
          
          <h5>Revisions</h5>
          <p>I optimized the UI for better responsiveness and added new features such as a leaderboard to enhance user engagement.</p>
          
          <h4>References</h4>
          <ul>
            <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Node.js Documentation</a></li>
            <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">React Documentation</a></li>
            <li><a href="https://tailwindcss.com/docs" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-700 font-semibold">Tailwind CSS Documentation</a></li>
          </ul>
        `,
        image: 'https://github.com/ayanchyaziz123/codingjudge/blob/master/coding_judge_frontend/public/home.png?raw=true',
        image2: 'https://github.com/ayanchyaziz123/codingjudge/blob/master/coding_judge_frontend/public/accepted.png?raw=true',
        image3: 'https://github.com/ayanchyaziz123/codingjudge/blob/master/coding_judge_frontend/public/Register.png?raw=true',
        description: 'A platform that lets users solve coding problems and receive real-time feedback on their code submissions.',
        technologies: ['Node.js', 'Express.js', 'React.js', 'Tailwind CSS'],
        link: '/projects/personal-online-coding-judge',
        github: 'https://github.com/ayanchyaziz123/codingjudge'
      },
        
    // {
    //     slug: 'algorithm-visualizer',
    //     title: 'Interactive Algorithm Visualizer',
    //     date: 'December 2024',
    //     content: `
    //         <p>This interactive tool visualizes various data structures and algorithms, providing an engaging learning experience.</p>
    //         <h3>Key Features:</h3>
    //         <ul>
    //             <li>Real-time visualization of sorting, searching, and graph algorithms.</li>
    //             <li>Interactive controls to manipulate data and see algorithm processing.</li>
    //             <li>Customizable settings for speed and data size for tailored learning.</li>
    //             <li>Responsive design with Tailwind CSS for all devices.</li>
    //         </ul>
    //         <h3>Technologies Used:</h3>
    //         <ul>
    //             <li>JavaScript</li>
    //             <li>HTML/CSS</li>
    //             <li>Tailwind CSS</li>
    //             <li>GitHub</li>
    //         </ul>
    //         <h3>Links:</h3>
    //         <ul>
    //             <li><a href="https://github.com/ayanchyaziz123/algorithm-visualizer" target="_blank" class="text-blue-500 underline">GitHub Repository</a></li>
    //             <li><a href="https://www.youtube.com/watch?v=your-video-id" target="_blank" class="text-blue-500 underline">YouTube Demo</a></li>
    //             <li><a href="https://your-live-site.com" target="_blank" class="text-blue-500 underline">Live Demo</a></li>
    //         </ul>
    //     `,
    //     image: 'https://github.com/ayanchyaziz123/algorithm-visualizer/blob/master/public/bs.png?raw=true',
    //     image2: 'https://github.com/ayanchyaziz123/algorithm-visualizer/blob/master/public/sort.png?raw=true',
    //     image3: 'https://github.com/ayanchyaziz123/algorithm-visualizer/blob/master/public/pn.png?raw=true',
    //     description: 'A tool to visualize data structures and algorithms in real-time, allowing users to interact with the algorithm processing.',
    //     technologies: ['JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
    //     link: '/projects/algorithm-visualizer',
    // }
];

export default projects;
