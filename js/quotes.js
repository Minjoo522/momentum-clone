const quotes = [
  {
    quote:
      'You will face many defeats in life, but never let yourself be defeated.',
    author: 'Maya Angelou',
  },
  {
    quote:
      'The greatest glory in living lies not in never falling, but in rising every time we fall.',
    author: 'Nelson Mandela',
  },
  {
    quote: 'This too shall pass.',
    author: 'Et hoc transbit',
  },
  {
    quote: 'Only I can change me life, no one can do it for me.',
    author: 'Carol Burnett',
  },
  {
    quote: 'When it doubt, choose change.',
    author: 'Lily leung',
  },
  {
    quote: 'Being happy never goes out of style.',
    author: 'Lilly Pulitzer',
  },
  {
    quote:
      'Life is a mountain. Your goal is to find your path, not to reach the top. ',
    author: 'Maxime Lgace',
  },
  {
    quote:
      'If you are not willing to risk the usual, you will have to settle for the ordinary. ',
    author: 'Jim Rohn',
  },
  {
    quote: 'No great man ever complains of want of opportunity.',
    author: 'Anonymous',
  },
  {
    quote:
      'Success usually comes to those who are too busy to be looking for it. ',
    author: 'Henry David Thoreau',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
