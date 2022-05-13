var quotes = [
  {
    quote: "“Be yourself; everyone else is already taken.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "Marilyn Monroe",
  },
  {
    quote: "“So many books, so little time.”",
    author: "Frank Zappa",
  },
  {
    quote: "“A room without books is like a body without a soul.”",
    author: "Marcus Tullius Cicero",
  },
  {
    quote: "“Be the change that you wish to see in the world.”",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "“In three words I can sum up everything I've learned about life: it goes on.”",
    author: "Robert Frost",
  },
  {
    quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "“A day without sunshine is like, you know, night.”",
    author: "Steve Martin",
  },
  {
    quote:
      "“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.”",
    author: "George R.R. Martin",
  },
  {
    quote:
      "“If you only read the books that everyone else is reading, you can only think what everyone else is thinking.”",
    author: "Haruki Murakami, Norwegian Wood",
  },
  {
    quote: "“I have always imagined that Paradise will be a kind of library.”",
    author: "Jorge Luis Borges",
  },
  {
    quote: "“Everything you can imagine is real.”",
    author: "Pablo Picasso",
  },
  {
    quote: "“We don't see things as they are, we see them as we are.”",
    author: "Anaïs Nin",
  },
  {
    quote:
      "“Remember, we're madly in love, so it's all right to kiss me anytime you feel like it.”",
    author: "Suzanne Collins",
  },
  {
    quote:
      "“A lady's imagination is very rapid; it jumps from admiration to love, from love to matrimony in a moment.”",
    author: "Jane Austen",
  },
  {
    quote: "“To die will be an awfully big adventure.”",
    author: "J.M. Barrie",
  },
  {
    quote:
      "“Some day you will be old enough to start reading fairy tales again.”",
    author: "C.S. Lewis",
  },
  {
    quote: "“What a slut time is. She screws everybody.”",
    author: "John Green",
  },
  {
    quote: "“Books are a uniquely portable magic.”",
    author: "Stephen King",
  },
  {
    quote: "“But better to get hurt by the truth than comforted with a lie.”",
    author: "Khaled Hosseini",
  },
  {
    quote: "“The truth is rarely pure and never simple.”",
    author: "Oscar Wilde",
  },
  {
    quote:
      "“There is nothing better than a friend, unless it is a friend with chocolate.”",
    author: "Linda Grayson",
  },
  {
    quote:
      "“... a mind needs books as a sword needs a whetstone, if it is to keep its edge.”",
    author: "George R.R. Martin",
  },
];

function createQuote() {
  var quoteNumber = parseInt(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[quoteNumber].quote;
  document.getElementById(
    "author"
  ).innerHTML = `-- ${quotes[quoteNumber].author}`;
}
