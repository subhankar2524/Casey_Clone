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
      ],
      options: ['Red', 'Blue', 'Green', 'Yellow']
    },

    {
        id: 3,
        type: 'mcq',
        prompts: [
          { type: 'text', content: 'Sample table data for testing' },
          { type: 'text', content: 'Choose any color from here. . .it is a mcq but a single ans question' },
        ],
        options: ['pink', 'violet', 'red', 'green', 'blue']
      },
      {
        id: 4,
        type: 'mcq-multi',
        prompts: [
          { type: 'text', content: 'Select Any Three Months' },
          { type: 'text', content: 'Select Them from the options below' },
          { type: 'text', content: 'It is a multiple ans type question' },
          { type: 'table', 
            content: { 
              th: ['Jan', 'Feb', 'Mar', 'Aprl', 'May', 'Jun', 'Jul','Aug', 'Sept', 'Oct', 'Nov', 'Dec'], 
              td: [[1,2,3,4,5,6,7,8,9,10,10,10],[11,14,15,24, 45,56,12,45,89,56,34,56]]
          } },
        ],
        options: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      },
      {
        id: 5,
        type: 'end',
        prompts: [
          { type: 'text', content: 'Thank you for taking the survey' },
        ],
      },
  ];
  