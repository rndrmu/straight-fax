document.addEventListener('contextmenu', function (ev) {
  ev.preventDefault();
}, false);
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('stringsDisplay').innerHTML = randomString().fact;

});

document.getElementById('stringsbtn').addEventListener('click', () => {
  document.getElementById('stringsDisplay').innerHTML = randomString().fact;
  randomString().source == undefined ? console.log(true) : document.getElementById('stringsDisplaysrc').innerHTML = randomString().source

});

function randomString() {
  var quotes = [{
      fact: "Jellyfish are mostly water.",
    },
    {
      fact: "The electric chair was invented by a dentist.",
    },
    {
      fact: "It is illegal to take photos of the Eiffel Tower at night.",
    },

    {
      fact: "Peanuts, walnuts, almonds, cashews, and pistachios are technically seeds, not fruit.",

    },

    {
      fact: "Firefighters use wetting agents to make water wetter.",

    },

    {
      fact: "The longest word in a major English dictionary is pneumonoultramicroscopicsilicovolcanoconiosis, the full name for silicosis",

    },
    {
      fact: "The current American flag was designed by a high school student in 1958.",

    },
    {


      fact: "Queen Elizabeth II is the world's longest-reigning queen and the oldest current monarch in the world.",

    },
    {
      fact: "Queen Elizabeth II has been in power for just over 69 years as of March 2021.",

    },

    {
      fact: "California is larger than England.",

    },
    {
      fact: "The car manufacturer BMW manufactured planes during the war.",

    },
    {
      fact: "Fortune Cookies are an American invention.",

    },
    {
      fact: "There are only 20-25 Blimps in the world, and most are out of service.",

    },
    {
      fact: "Albert Einstein never wore any socks.",

    },
    {
      fact: "Approximately 70 percent of the earth is covered by water.",

    },
    {
      fact: "1 in 10 American households dress their pets in Halloween costumes.",

    },
    {
      fact: "Half of all lottery winners go back to work, after winning the jackpot.",

    },
    {
      fact: "Burger King is called Hungry Jack's in Australia.",

    },
    {
      fact: "Each day, more than $40 Trillion Dollars changes hands worldwide.",

    },
    {
      fact: "Chewing gum while peeling onions will keep you from crying.",

    },
    {
      fact: "Frogs cannot swallow without blinking.",

    },
    {
      fact: "Watermelons can cost up to $100 in Japan.",

    },
    {
      fact: "Burger King sells over a billion whopper burgers each year.",

    },
    {
      fact: "Over 40 Billion emails are sent each day, over 80% of these emails are marketing emails.",

    },
    {
      fact: "There's over a billion websites in existence on the World Wide Web.",

    },
    {
      fact: "Starfish don't have brains.",

    },

    {
      fact: "Email existed before the world wide web.",

    },

    {
      fact: "You could get your own domain for free until 1995.",

    },
    {
      fact: "In 1956, 5 Megabytes of data weighed a ton.",

    },
    {
      fact: "The world record for finishing the Rubik’s cube is 9 seconds.",

    },
    {
      fact: "The winter of 1932 was so cold that Niagara Falls froze completely solid.",

    },
    {
      fact: "Any month that starts on a Sunday will have a Friday the 13th.",

    },
    {
      fact: "Dogs and cats consume over $11 billion worth of pet food a year.",

    },
    {
      fact: "The black box in an airplane is orange.",

    },
    {
      fact: "40% of McDonalds profits come from the sales of Happy Meals.",

    },
    {
      fact: "Black is not a color, it is a combination of all the colors.",

    },
    {
      fact: "Humans and dolphins are the only species that have sex for pleasure.",

    },
    {
      fact: "Only humans and horses have hymens.",

    },
    {
      fact: "Ketchup was sold in the 1830’s as medicine.",

    },
    {
      fact: "Coca-Cola’s Super Pure Dasani bottled water is just filtered tap water!",

    },
    {
      fact: "Streets in Japan do not have names.",

    },

    {
      fact: "Jordan Russ has his own website.",

    },
    {
      fact: "The name of all the continents end with the same letter that they start with.",

    },
    {
      fact: "An octupus has 3 hearts.",

    },
    {
      fact: "Cat’s do not have 9 lives.",

    },
    {
      fact: "The only 15 letter word that can be spelled without repeating a letter is uncopyrightable.",

    },
    {
      fact: "The storage capacity of human brain exceeds 4 Terrabytes.",

    },
    {
      fact: "In the United States, deaf people have safer driving records than hearing people!",

    },
    {
      fact: "Every time you lick a stamp, you are consuming a tenth of a calorie.",

    },
    {
      fact: "The word 'set' has more definitions than any other word in the English language.",

    },
    {
      fact: "The most productive day of the workweek is Tuesday.",

    },
    {
      fact: "The lifespan of the common goldfish is over 20 years, if they are well maintained.",

    },
    {
      fact: "For every normal webpage, there are five porn pages.",

    },
    {
      fact: "The filming of the Titanic movie, cost more than the Titanic itself.",

    },
    {
      fact: "Only male fireflies can fly.",

    },
    {
      fact: "More than half the population of Kenya is under the age of 15.",

    },
  ];
  var quote = quotes[Math.floor(Math.random() * quotes.length)];
  return (quote);

};

var form = document.getElementById("suggestion-box");
    
async function handleSubmit(event) {
  if (document.querySelector('textarea').value == "") return (
    document.getQuerySelector(` p[id="required"] `).textContent = "This field is required!"
  )
  event.preventDefault();
  var status = document.getElementById("status-indicator");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    status.innerHTML = "Thanks for your suggestion!";
    form.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
