export const QUESTIONS = [
    {
      id: 1,
      type: 'single-answer',
      prompts: [
        { type: 'text', content: 'What is your name?' },
        { type: 'image', content: 'https://picsum.photos/seed/picsum/200/300' },
        { type: 'text', content: 'Please enter your full name.' }
      ]
    },
    {
      id: 2,
      type: 'mcq',
      prompts: [
        { type: 'text', content: 'What is your favorite color?' },
        { type: 'table', content: [['Red', 'Blue'], ['Green', 'Yellow']] },
      ],
      options: ['Red', 'Blue', 'Green', 'Yellow']
    },

    {
        id: 3,
        type: 'mcq',
        prompts: [
          { type: 'text', content: 'What is your favorite color?' },
          { type: 'table', content: [['Red', 'Blue'], ['Green', 'Yellow']] },
        ],
        options: ['pink', 'violet', 'red', 'green']
      },
    // Add more questions as needed
  ];
  