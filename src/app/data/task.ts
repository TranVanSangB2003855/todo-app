export interface Task {
  id: number;
  name: string;
  description: string;
}

export const newTasks: Task[] = [
  {
      id: 1,
      name: 'Research new market trends',
      description: 'Gather information on emerging trends in the market relevant to our industry.',
  },
  {
      id: 4,
      name: 'Develop marketing campaign strategy',
      description: 'Brainstorm ideas and outline a comprehensive strategy for an upcoming marketing campaign.',
  },
  {
      id: 7,
      name: 'Optimize website performance',
      description: 'Identify and implement improvements to enhance the speed and responsiveness of our website.',
  },
  {
      id: 8,
      name: 'Prepare presentation for board meeting',
      description: 'Compile relevant data and create a visually appealing presentation for the upcoming board meeting.',
  },
  {
      id: 10,
      name: 'Plan team building event',
      description: 'Coordinate activities and logistics for a team building event to foster camaraderie among team members.',
  },
  {
      id: 15,
      name: 'Attend industry conference and networking events',
      description: 'Participate in relevant industry events to stay updated on industry trends and expand professional network.',
  },
  {
      id: 17,
      name: 'Coordinate logistics for upcoming product launch',
      description: 'Plan and organize all aspects of the product launch event, including venue, catering, and promotional materials.',
  },
  {
      id: 18,
      name: 'Research and negotiate vendor contracts',
      description: 'Identify potential vendors, negotiate terms, and finalize contracts for goods and services needed by the company.',
  },
  {
      id: 19,
      name: 'Review and update cybersecurity protocols',
      description: 'Assess current cybersecurity measures and implement updates to protect company data from potential threats.',
  }
];

export const inProgressTasks: Task[] = [
  {
      id: 2,
      name: 'Design user interface for new app feature',
      description: 'Sketch wireframes and create mockups for the upcoming feature in our mobile app.',
  },
  {
      id: 6,
      name: 'Conduct customer satisfaction survey',
      description: 'Create and distribute a survey to gather feedback from customers about their satisfaction with our products/services.',
  },
  {
      id: 9,
      name: 'Train new team members',
      description: 'Organize training sessions and provide guidance to onboard new team members effectively.',
  },
  {
      id: 12,
      name: 'Revise company policies and procedures',
      description: 'Review existing policies and procedures and make necessary updates to ensure compliance and efficiency.',
  },
  {
      id: 13,
      name: 'Collaborate with design team on branding project',
      description: 'Work closely with the design team to develop branding materials for an upcoming project.',
  },
  {
      id: 14,
      name: 'Implement feedback from usability testing',
      description: 'Address issues identified during usability testing and make improvements to enhance user experience.',
  }
];

export const doneTasks: Task[] = [
  {
      id: 3,
      name: 'Review quarterly financial reports',
      description: 'Analyze and assess the financial performance of the company for the last quarter.',
  },
  {
      id: 5,
      name: 'Write content for company blog',
      description: 'Produce engaging and informative articles for the company blog to attract more readers.',
  },
  {
      id: 11,
      name: 'Research and implement new productivity tools',
      description: 'Explore different productivity tools and integrate the most suitable ones into our workflow.',
  },
  {
      id: 16,
      name: 'Conduct employee performance evaluations',
      description: 'Evaluate individual performance and provide constructive feedback to employees to support their professional development.',
  },
  // {
  //     id: 19,
  //     name: 'Develop training materials for new software rollout',
  //     description: 'Create instructional guides and videos to facilitate the transition to new software across the organization.',
  // }
];


  // todo: {name: string, description: string}[] = [] ;
  // todo = [
  //   {
  //     name: 'Get to work Start your day by tackling important tasks. Start your day by tackling important tasks. Start your day by tackling important tasks.',
  //     description: 'Start your day by tackling important tasks. Start your day by tackling important tasks. Start your day by tackling important tasks.'
  //   },
  //   {
  //     name: 'Pick up groceries',
  //     description: 'Grab the essentials for the week.'
  //   },
  //   {
  //     name: 'Go home',
  //     description: 'Wrap up your day and head back home.'
  //   },
  //   {
  //     name: 'Get to work',
  //     description: 'Start your day by tackling important tasks. Start your day by tackling important tasks. Start your day by tackling important tasks.'
  //   },
  //   {
  //     name: 'Pick up groceries',
  //     description: 'Grab the essentials for the week.'
  //   },
  //   {
  //     name: 'Go home',
  //     description: 'Wrap up your day and head back home.'
  //   },
  //   {
  //     name: 'Get to work',
  //     description: 'Start your day by tackling important tasks. Start your day by tackling important tasks. Start your day by tackling important tasks.'
  //   },
  //   {
  //     name: 'Pick up groceries',
  //     description: 'Grab the essentials for the week.'
  //   },
  //   {
  //     name: 'Go home',
  //     description: 'Wrap up your day and head back home.'
  //   },
  //   {
  //     name: 'Get to work',
  //     description: 'Start your day by tackling important tasks. Start your day by tackling important tasks. Start your day by tackling important tasks.'
  //   },
  //   {
  //     name: 'Pick up groceries',
  //     description: 'Grab the essentials for the week.'
  //   },
  //   {
  //     name: 'Go home',
  //     description: 'Wrap up your day and head back home.'
  //   },
  //   {
  //     name: 'Get to work',
  //     description: 'Start your day by tackling important tasks. Start your day by tackling important tasks. Start your day by tackling important tasks.'
  //   },
  //   {
  //     name: 'Pick up groceries',
  //     description: 'Grab the essentials for the week.'
  //   },
  //   {
  //     name: 'Go home',
  //     description: 'Wrap up your day and head back home.'
  //   },
  //   {
  //     name: 'Get to work',
  //     description: 'Start your day by tackling important tasks. Start your day by tackling important tasks. Start your day by tackling important tasks.'
  //   },
  //   {
  //     name: 'Pick up groceries',
  //     description: 'Grab the essentials for the week.'
  //   },
  //   {
  //     name: 'Go home',
  //     description: 'Wrap up your day and head back home.'
  //   }
  // ];

  // inProgress = [
  //   {
  //     name: 'Fall asleep',
  //     description: 'Rest a bit before getting back to work.'
  //   },
  //   {
  //     name: 'Take a shower',
  //     description: 'Freshen up and recharge.'
  //   },
  //   {
  //     name: 'Walk dog',
  //     description: 'Spend quality time with your furry friend.'
  //   }
  // ]

  // done = [
  //   {
  //     name: 'Get up',
  //     description: 'Rise and shine, a new day awaits!'
  //   },
  //   {
  //     name: 'Brush teeth',
  //     description: 'Maintain good oral hygiene.'
  //   },
  //   {
  //     name: 'Check e-mail',
  //     description: 'Stay updated and connected.'
  //   }
  // ];
