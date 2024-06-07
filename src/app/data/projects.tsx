const projects = [
    {
        title: 'Personal Finance Tracker',
        subTitle: 'Telegram bot script for finances',
        duration: '05/2024',
        description: '',
        bulletPoints: [
            'Telegram bot API for communication', 
            'Google sheets for data storage and manipulation',
            'Report expenses',
            'Generate reports (daily, weekly, monhtly)',
            'Automated reporting',
            'Click to continue reading...'
        ],
        overview: {
            title: "OVERVIEW",
            description: (<>I've tried out multiple personal finance apps and I didn't manage to stick with any of them. The <span className=" text-titles">user flow was clunky</span> and before I knew it the app that 
            was trying to save me money, was costing me 2.99€ per month to collect digital dust. For that reason I joined forces with my colleague who has already started the development 
            (hoping that I will stick with something that developed).<br></br><br></br> Over the weekend I developed a  <span className=" text-titles">Telegram bot</span> that interacts with 
            <span className=" text-titles">Google Sheets</span> to help me report and manage my expenses. Communication between the bot and Google sheets is handled with a  <span className=" text-titles">Google script</span>, 
            that based on the users input executes a task. For example generating a weekly report can be done by sending the keyword "weekly" and the script sends the user a  <span className=" text-titles">text report</span>,
            a Pie chart representing  <span className=" text-titles">expense categories</span> and a line chart for  <span className=" text-titles">daily spendings</span>.</>)
        },
        rolesFunctionalities: {
            title: "ROLES AND FUNCTIONALITIES",
            roles: [
                {
                    role: "Customer",
                    functionalities: [
                        "Registration: Allow users to create an account.",
                        "Login: Secure authentication for users to access their accounts.",
                        "Product Browsing: View and search for products.",
                        "Rating: Provide ratings for purchased products.",
                        "Shopping Cart: Add products to a virtual shopping cart for purchase.",
                        "Order History: View past orders and their details.",
                        "Profile Editing: Update personal information."
                    ]
                },
                {
                    role: "Seller",
                    functionalities: [
                        "Login: Secure authentication for sellers.",
                        "Order List: View a list of orders placed by customers.",
                        "Order Approval and Cancellation: Manage customer orders by approving or canceling them.",
                        "Creating New Products: Add new products to the store.",
                        "Product Management: Edit, activate, or deactivate products.",
                        "Profile Editing: Update personal information."
                    ]
                },
                {
                    role: "Admin",
                    functionalities: [
                        "Seller Creation: Add new sellers to the platform.",
                        "Customer Management: Edit, activate, or deactivate customer accounts.",
                        "Profile Editing: Update personal information."
                    ]
                }
            ]
        },
        keyFeaturesTechnologies: {
            title: "KEY FEATURES AND TECHNOLOGIES",
            features: [
                "Telegram bot: Set up a Telegram bot and connect it with Google scripts to receive commands.",
                "Google sheets: Storing and manipulating data in Google Spreadsheet for ease of parsing and user interaction.",
                "Expense charts: Creating charts using Googles Charts and uploading them to Google Drive for sharing with Telegram bot.",
                "Data parsing: Working with differnet data types across different platforms with a highlight on Date objects.",
                "Automation: Making sure the script will be able to run for years to come with minimal user interaction."
            ]
        },
        projectContributions: {
            contributions: [
                {
                    title: 'Data parsing',
                    description: [
                        'When creating reports I had to filter out data that matches the time period, initially I did this purely with JavaScript code, which worked but was slow.',
                        'Final solution was implemented using Google Sheets functions and filters, with some code left for data manipulation',
                        'Calculating sums and averages for days and categories of expenses.'
                    ]
                },
                {
                    title: 'Drawing charts',
                    description: [
                        'I created Pie charts and Line charts using Google Charts tool, and stored them on google Drive.',
                        'When a user generates a report it is sent to him via Telegram with Chart images attached.'
                    ]
                },
                {
                    title: 'Setting up triggers',
                    description: [
                        'Using Google Scripts triggers I\'ve set up triggers that send report daily (at 8PM), weekly (Sun 8PM) and monhtly (1st of the month 8PM).'
                    ]
                }
            ]
        },
        challengesSolutions: {
            title: "CHALLENGES AND SOLUTIONS",
            challenges: [
                "Server Setup: Configured a LAMP server locally to run the PHP website.",
                "Team Coordination: Managed a small team, delegating tasks and ensuring effective collaboration.",
                "Compliance with Standards: Adhered to academic standards and project guidelines."
            ]
        },
        achievements: {
            title: "ACHIEVEMENTS",
            achievements: [
                "Functional Online Store: Developed a fully functional online store with user authentication, product management, and order processing.",
                "Team Leadership: Successfully led a team to complete the project, demonstrating leadership and project management skills."
            ]
        },
        image: [
            '/img/personal_finance_bot_hero.png',
            '/img/personal_finance_bot_hero_2.png'
        ],
        link: {
            type: 'github',
            url: 'https://github.com/mihajanstrehovec/personal_finance_bot'
        }
        
    },
    {
        title: 'SLADKET',
        subTitle: 'A PHP E-SHOP',
        duration: '02/2021',
        description: '',
        bulletPoints: [
            'Online store for sweet tooths', 
            'Developed in PHP',
            'Website designed in Adobe Illustrator',
            'Deployed on Heroku',
            'Data storage implemented with clearDB',
            'Click to continue reading...'
        ],
        overview: {
            title: "OVERVIEW",
            description: (<>This was a college seminar assignment part of the subject  <span className=" text-titles">e-commerce</span> at FRI where we were tasked with creating a web shop using 
            <span className=" text-titles">PHP</span> and <span className=" text-titles">MySQL</span>. <br></br><br></br>I paired up with two of my classmates and took the initiative by creating the website 
            <span className=" text-titles">wireframes</span> and <span className=" text-titles">UI</span> in Figma. Before we started with the development I set up our local environments for PHP using 
            <span className=" text-titles">LAMP</span>, which was a first for me. We also had to ask, what are the <span className=" text-titles">user roles</span> our web shop needs to support (admin, customer, seller) 
            and what kind of access they have.<br></br><br></br> After we had a full picture of the project we started coding, it was one of my first time working with <span className=" text-titles">MVC</span> 
            architecture so it took some time getting used, same goes for PHP. But at the end we had a <span className=" text-titles">fully functioning e-commerce</span> store for sweet tooths that only needs a 
            payment system integration to work (something like Stripe).</>)
        },
        rolesFunctionalities: {
            title: "ROLES AND FUNCTIONALITIES",
            roles: [
                {
                    role: "Customer",
                    functionalities: [
                        "Registration: Allow users to create an account.",
                        "Login: Secure authentication for users to access their accounts.",
                        "Product Browsing: View and search for products.",
                        "Rating: Provide ratings for purchased products.",
                        "Shopping Cart: Add products to a virtual shopping cart for purchase.",
                        "Order History: View past orders and their details.",
                        "Profile Editing: Update personal information."
                    ]
                },
                {
                    role: "Seller",
                    functionalities: [
                        "Login: Secure authentication for sellers.",
                        "Order List: View a list of orders placed by customers.",
                        "Order Approval and Cancellation: Manage customer orders by approving or canceling them.",
                        "Creating New Products: Add new products to the store.",
                        "Product Management: Edit, activate, or deactivate products.",
                        "Profile Editing: Update personal information."
                    ]
                },
                {
                    role: "Admin",
                    functionalities: [
                        "Seller Creation: Add new sellers to the platform.",
                        "Customer Management: Edit, activate, or deactivate customer accounts.",
                        "Profile Editing: Update personal information."
                    ]
                }
            ]
        },
        keyFeaturesTechnologies: {
            title: "KEY FEATURES AND TECHNOLOGIES",
            features: [
                "LAMP Stack: Set up a local server environment using Linux, Apache, MySQL, and PHP.",
                "Heroku Deployment: Deployed the application on Heroku with ClearDB for database hosting.",
                "User Roles: Implemented distinct user roles with specific functionalities and permissions.",
                "MVC Architecture: Utilized Model-View-Controller architecture to structure the code.",
                "Security Measures: Ensured secure login and data handling practices.",
                "Emails: User confirmation code after registration, invoice after succesful purchase, password reset."
            ]
        },
        projectContributions: {
            contributions: [
                {
                    title: 'Design and Development',
                    description: [
                        'Created wireframes for each page of the web shop including product gallery, single product page, add/edit product page, admin panel.',
                        'Based on the wireframes I selected the primary colors and designed the UI of the website in Figma.',
                        'I led the development process, implementing new features and setting up every component.',
                        'Developed features like Cart, Order management (accept, decline, refund), add/edit product form.'
                    ]
                },
                {
                    title: 'Team Organization',
                    description: [
                        'Led, organized and motivated a small team of students to develop the e-commerce solution.',
                        'Delegated tasks and engaged my teammates when they had difficulties with their responsibilites.'
                    ]
                },
                {
                    title: 'Emails',
                    description: [
                        'Set up email sender for customers using PHPMailer and gmail SMTP.',
                        'Desgined and created HTML email templates and automated sending.',
                        'Different scenarios for emails like customer registration verification code, invoice'
                    ]
                }
            ]
        },
        challengesSolutions: {
            title: "CHALLENGES AND SOLUTIONS",
            challenges: [
                "Server Setup: Configured a LAMP server locally to run the PHP website.",
                "Team Coordination: Managed a small team, delegating tasks and ensuring effective collaboration.",
                "Compliance with Standards: Adhered to academic standards and project guidelines."
            ]
        },
        achievements: {
            title: "ACHIEVEMENTS",
            achievements: [
                "Functional Online Store: Developed a fully functional online store with user authentication, product management, and order processing.",
                "Team Leadership: Successfully led a team to complete the project, demonstrating leadership and project management skills."
            ]
        },
        image: [
            '/img/SladketHero.png',
            '/img/SladketCheckout.png'
        ],
        link: {
            type: 'github',
            url: 'https://github.com/mihajanstrehovec/Sladket'
        }
        
    },
    {
        title: 'Frigre',
        subTitle: 'University gaming platform web app',
        duration: '08/2020',
        description: '',
        bulletPoints: [  
            'Developed a web app using the framework Angular',
            'Data storage implemented with MongoDB',
            'Collaborated with 2 other students',
            'Online platform for gaming events',
            'Deployed on Heroku',
            'Click to continue reading...'
        ],
        projectName: "Frigre (University Gaming Platform Web App)",
        overview: {
            title: "OVERVIEW",
            description: (<>Frigre is a hub for <span className=" text-titles">all e-sports and gaming</span> needs for all students of University of Ljubljana. The project was a collaborative effort with two college classmates, spanned six months 
            and was designed to host gaming events for students of the university. <br></br><br></br> The web app was developed with Angular   <br></br><br></br> Students can <span className=" text-titles">sign up</span> to <span className=" text-titles">tournaments</span>, <span className=" text-titles">create</span> thier own <span className=" text-titles">teams</span>, view the leaderboards select their game of choice and create 
            tournaments. The application includes user authentication via JWT and is deployed on Heroku. It also features Progressive Web App (PWA) capabilities, a Discord bot allowing users to chat directly from the website
            and a comprehensive documentation with Swagger.</>)
        },
        rolesFunctionalities: {
            title: "ROLES AND FUNCTIONALITIES",
            roles: [
                {
                    role: "Customer",
                    functionalities: [
                        "Registration: Allow users to create an account.",
                        "Login: Secure authentication for users to access their accounts.",
                        "Profile Editing: Update personal information.",
                        "Product Browsing: View and search for products.",
                        "Rating: Provide ratings for purchased products.",
                        "Shopping Cart: Add products to a virtual shopping cart for purchase.",
                        "Order History: View past orders and their details."
                    ]
                },
                {
                    role: "Seller",
                    functionalities: [
                        "Login: Secure authentication for sellers.",
                        "Order List: View a list of orders placed by customers.",
                        "Order Approval and Cancellation: Manage customer orders by approving or canceling them.",
                        "Creating New Products: Add new products to the store.",
                        "Product Management: Edit, activate, or deactivate products.",
                        "Profile Editing: Update personal information."
                    ]
                },
                {
                    role: "Admin",
                    functionalities: [
                        "Seller Creation: Add new sellers to the platform.",
                        "Customer Management: Edit, activate, or deactivate customer accounts.",
                        "Profile Editing: Update personal information."
                    ]
                }
            ]
        },
        keyFeaturesTechnologies: {
            title: "KEY FEATURES AND TECHNOLOGIES",
            features: [
                "Framework: Developed using Angular, following best practices for single-page applications.",
                "Database: Implemented with MongoDB for data storage.",
                "Deployment: Deployed on Heroku, leveraging its scalability and ease of use.",
                "Authentication: Utilized JSON Web Tokens (JWT) for secure authentication.",
                "PWA: Converted the web app to a Progressive Web App for enhanced user experience.",
                "Documentation: Documented functionalities using Swagger for API management and testing.",
                "Cross-Platform Compatibility: Ensured compatibility across different browsers and devices.",
                "Discord Bot: Integrated a Discord bot using Widgetbot.io to enhance user interaction.",
                "Optimization: Optimized the website using Lighthouse, addressing performance and accessibility issues."
            ]
        },
        projectContributions: {
            contributions: [
                {
                    title: 'Design and UX',
                    description: [
                        'I was in charge of creating the wireframe, UI design, component design and UX.',
                        'Designed all the main pages - landing page, profile editor, tournament creation, admin panel, leaderboards, tournament page.',
                        'Visualized data insight such as number of players, games played, tournaments and so on with different charts approriate for the data set.'
                    ]
                },
                {
                    title: 'Development',
                    description: [
                        'Played a significant role in the development of the web application, focusing on both front-end and back-end tasks.',
                        'Worked on storing and parsing the tournament data such as wins, team statistics, player statistics.',
                        'Worked on displaying the leaderboards data in a table that can be filtered, sorted and has pagination.',
                        'Worked on Admin features such as banning teams, players, creating tournaments both on front and back end.'
                    ]
                },
                {
                    title: 'Team Collaboration',
                    description: [
                        'Collaborated closely with two classmates, learning the importance of teamwork and effective communication.',
                        'The project tought me to trust my team mates and delegate more work to them.',
                        'Organizing task delegation and clear communication of the progress.'
                    ]
                },
                {
                    title: 'PWA Implementation',
                    description: [
                        'Successfully transformed the web application into a Progressive Web App, enhancing its functionality and offline capabilities.',
                        'Set up services for offline capabilites.'
                    ]
                },
                {
                    title: 'Documentation',
                    description: [
                        'Worked on documenting APIs with swagger.',
                        'Understanding what the code does and describing it concisely was a challenge',
                        'Learned the importance of one action per function.'
                    ]
                },
                {
                    title: 'Website Optimization',
                    description: [
                        'Conducted performance and accessibility optimization using Lighthouse.',
                        'Based on the results I optimized images, text contrast, and page load.',
                        'Cleaned up unnecessary scripts and libraries.'
                    ]
                }
            ]
        },
        challengesSolutions: {
            title: "CHALLENGES AND SOLUTIONS",
            challenges: [
                "User Authentication: Implemented secure authentication using JWT, addressing security concerns and ensuring user data protection.",
                "Design and Development: Balanced design and development tasks, ensuring a cohesive and functional end product.",
                "Cross-Browser Compatibility: Tested and optimized the application for different browsers, ensuring a consistent user experience.",
                "Documentation: Utilized Swagger to create comprehensive API documentation, facilitating easier maintenance and testing.",
                "Discord Bot Integration: Addressed issues with the Discord bot integration to ensure smooth functionality.",
                "Website Optimization: Resolved performance and accessibility issues identified through Lighthouse testing."
            ]
        },
        achievements: {
            title: "ACHIEVEMENTS",
            achievements: [
                "Functional Web App: Developed a fully functional single-page application with user authentication, event management, and PWA capabilities.",
                "User Engagement: Enhanced user engagement through a well-designed interface and robust functionality.",
                "Successful Deployment: Deployed the application on Heroku, ensuring scalability and reliability.",
                "Improved Interaction: Integrated a Discord bot to facilitate communication among users.",
                "Enhanced Performance: Optimized the website's performance and accessibility using Lighthouse."
            ]
        },
        image: [
            '/img/FrigreHome.png',
            '/img/FrigreTournaments.png'
        ],
        link: {
            type: 'github',
            url: 'https://github.com/sp-2020-2021/LP-18'
        }
    },
    {
        title: 'Creative path to practical knowledge',
        subTitle: 'Digital production',
        duration: '07/2019',
        description: '',
        bulletPoints: [
            'Created an informational flyer for special dogs',
            'Collaborated with professors from Faculty of Electrical Engineering and Veterinary Faculty',
            'Created animations used to represent surgery on a dog used in a national TV segment',
            'Click to continue reading...'
        ],
        overview: {
            title: "OVERVIEW",
            description: (<>The PKP project, titled Knowledge for the Health and Well-being of Brachycephalic Dogs, focused on digital production to create educational and informational content for veterinary purposes. The project involved collaboration with professors from the Faculty of Electrical Engineering and the Veterinary Faculty.<br></br> For this project I created digital content as per professors requests, where I had to understand the veterinary procedures and translate those into educational animations. Visualizing data was also a big part of this project as I was in charge of showcasing results of the professors research.  I also created a flyer that the university used to make the public more aware of the problems.</>)
        },
        
        projectContributions: {
           contributions: [
                {
                    title: "Informational Flyer",
                    description: [
                        "I made an informational flyer for the university to use as promotional material.",
                        "Set up meetings with the professors to understand their vision.",
                        "Tried to balance the importance of information as well as design and eyecatching visuals."
                    ]
                },
                {
                    title: "Animations",
                    description: [
                        "Created animations to showcase surgical procedures on dogs, making them both informational and not as hard to watch as the real deal.",
                        "The animations were used in a national TV segment to educate the public about veterinary surgeries.",
                        "Stuck mostly to 2D animations to keep the animations easier to watch."
                    ]
                },
                {
                    title: "Collaboration",
                    description: [
                        "Worked with professors from the Faculty of Electrical Engineering and Veterinary Faculty to ensure the accuracy and educational value of the materials.",
                        "Assisted a multimedia colleague in creating accurate and detailed 3D models for the animations using Blender.",
                        "Reviewed veterinary literature to ensure the animations accurately depicted surgical procedures.",
                        "Responded to feedback from mentors and made necessary adjustments to the animations and materials."
                    ]
                },
                {
                    title: "Project Management",
                    description: [
                        "Managed the timeline and coordinated tasks to ensure the project met all deadlines.",
                        
                    ]
                },
                {
                    title: "Technical and Creative Skills",
                    description: [
                        "Utilized software tools such as Blender for 3D modeling and animation.  ",
                        "Created high-quality digital content that adhered to veterinary guidelines and educational standards.",
                        "Addressed technical challenges such as creating accurate 3D models and ensuring the animations were clear and informative."
                    ]
                }
            ]
        },
        keyFeaturesTechnologies: {
            title: "KEY FEATURES AND TECHNOLOGIES",
            features: [
                "Balancing creativity and design principles alongside clarity of educational content.",
                "Following guidelines and standards for TV broadcasting (format, duration, contrast).",
                "Time management and optimization to deliver before deadline.",
            ]
        },
        image: [
            '/img/pkp_hero.png',
            '/img/pkp_hero_2.png'
        ],
        link: {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=Y8oGU0HDwfw'
        }
    },
    {
        title: 'Event photography',
        subTitle: 'Photographer for Capital Crew & Drill',
        duration: '09/2020',
        description: '',
        bulletPoints: [
            'Understanding customers demands',
            'Coordinating photoshoots at the event',
            'Photo editing',
            'Video editing',
            'Click to continue reading...'
        ],
        overview: {
            title: "OVERVIEW",
            description: "I was invited by the young trap group CapitalCrew to photograph their Vibe Check event. I gladly accepted as it presented an interesting challenge. Before the event, I met with the group to prepare, creating a mood board and a simple storyboard to guide my photography. During the event, I stayed focused on capturing key moments. Afterward, I edited the photos using Photoshop and Lightroom, and my work was featured on the profiles of all the artists involved."
        },
        keyFeaturesTechnologies: {
            title: "KEY FEATURES AND TECHNOLOGIES",
            features: [
                "Understanding camera settings and on the go adjusting to the scene.",
                "Detailed planning and preparation for events to anticipate and avoid surprises.",
                "Engaging with the crowd to capture vibrant and dynamic shots.",
                "Complying with on-location requests from the group for specific shots.",
                "Executing post-production to convey the energy and visual identity of the group.",
            ]
        },
        projectContributions: {
            contributions: [
                {
                    title: "Preparation",
                    description: [
                        "Collaborating with the group to define the creative direction.",
                        "Offering valuable input for structuring the event timeline.",
                        "Visualizing the event layout to determine optimal positioning and necessary gear."
                    ]
                },
                 {
                     title: "Photography",
                     description: [
                        "Capturing performers on stage from various angles to provide a comprehensive view.",
                        "Interacting with the crowd to take immersive and lively photos.",
                        "Adjusting camera settings and positioning in response to the dynamic event environment."
                    ]
                 },
                 {
                     title: "Videography",
                     description: [
                        "Recording performers to ensure all significant moments are captured.",
                        "Using a GoPro attached to the microphone for unique and creative shots.",
                        "Adhering to established videography rules and standards for consistent quality."
                    ]
                 },
                 {
                     title: "Post production",
                     description: [
                        "Editing photos using Lightroom and Photoshop to enhance quality.",
                        "Creating an aftermovie by editing video footage in Premiere Pro.",
                        "Designing and integrating 3D objects for the aftermovie using Blender."
                     ]
                 }
             ]
         },
         image: [
            '/img/CapitalCrewHero2.png',
            '/img/CapitalCrewHero.png'
        ],
         link: {
            type: 'instagram',
            url: 'https://www.instagram.com/p/CErHipvjQA-/?hl=en&img_index=1'
        }

    },
    {
        title: 'PICA',
        subTitle: 'Stop motion animation',
        duration: '05/2018',
        description: '',
        bulletPoints: [
            'Award-nominated stop motion animation',
            'Writing script',
            'Building sets with Legos',
            'Stop motion photography',
            'Video editing',
            'Click to continue reading...'
        ],
        overview: {
            title: "OVERVIEW",
            description: (<>During my time at Srednja medijska in grafična šola Ljubljana I colaborated with a group of students to create a <span className=" text-titles">stop motion short movie</span> for one of the subjects. We first decided to use LEGO bricks for the materials and started with the script. Each member contributed their ideas and I put together the final script with as many suggestions as possible. We then made a story board to help us visualize the final project, this was very helpfull as it was easier to do scenography later on. <br/><br/>This was our next task, building the sets and off we went taking photos of each frame of the animation. It was a long and exhausting process as we had to be meticulous about every little thing. Along with the process of shooting I started editing the movie with the pictures we already had, I took care of the sound design, voice over, compositing, editing and all the other post production elements. Thankfully the hard work paid off as we got invited to <span className=" text-titles"> Enimation </span> a short film festival.</>)
        },
        
        projectContributions: {
           contributions: [
                {
                    title: "Script writing",
                    description: [
                        "Brainstorming different script ideas, listening to all team members inputs.",
                        "Reviewing all the ideas and using them to write the final script.",
                        "Writing dialog, scene descriptions and timeline.",
                        
                    ]
                },
                {
                    title: "Stop motion photography",
                    description: [
                        "Setting up the scenography with Lego bricks.",
                        "Lighting the scene with studio lights, which was very difficult as Lego bricks are reflective.",
                        "Moving the characters between frames.",
                        "Configuring the cameras settings for optimal photos and consistency."
                    ]
                },
                {
                    title: "Post production",
                    description: [
                        "In charge of the postproduction including sound design, editing, compositing, dialog.",
                        "Recording dialog and processing the sound for different voice styles.",
                        "Finding and recording foliage sound effects then used in the edit to bring the movie to life.",
                        "Compositing videos with green screen."
                    ]
                },
                {
                    title: "Collaboration",
                    description: [
                        "Organized and motivated my team mates and delegated tasks during production.",
                        "Worked closely with a team of 5 people utilizing each members potential.",
                    ]
                }
            ]
        },
        keyFeaturesTechnologies: {
            title: "KEY FEATURES AND TECHNOLOGIES",
            features: [
                "The project tough me a lot, most of all how important preparation is and how much time it can save.",
                "The short stop motion movie was viewed in Španski borci and Enimation short film festival.",
                "Meticulous project with little to no room for error.",
            ]
        },
        image: [
            '/img/pica_hero.png',
            '/img/pica_hero_2.png'
        ],
        link: {
            type: 'youtube',
            url: 'https://www.youtube.com/watch?v=mIyoJ9r6KRY'
        }
    }

]

export default projects