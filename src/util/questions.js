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
          { type: 'table', 
            content: { 
              th: ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'Jun', 'Jul','Aug', 'Sept', 'Oct', 'Nov', 'Dec']
          } },
        ],
        options: ['pink', 'violet', 'red', 'green']
      },
      {
        id: 4,
        type: 'mcq-multi',
        prompts: [
          { type: 'text', content: 'Select Any Three Months' },
          { type: 'text', content: 'Select Them from the options below' },
          { type: 'text', content: 'It is a multiple ans type question' },
        ],
        options: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
  ];
  