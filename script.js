// List of random drinking game instructions
const instructions = [
  "Take 2 sips if you're wearing black.",
  "Make someone else drink 3 sips.",
  "Waterfall: Everyone starts drinking, and you decide when to stop.",
  "Take a shot if you’ve travelled abroad this year.",
  "Switch drinks with the player to your left.",
  "All players with glasses take 1 sip.",
  "Invent a new rule for the game.",
  "Truth or Drink: Answer or take 2 sips.",
  "Choose a player to take 5 sips.",
  "Everyone with short hair takes a sip.",
  "Take 1 sip if you’ve ever been on a plane.",
  "Take a sip for each tattoo you have.",
  "Everyone who owns a pet takes 1 sip.",
  "If you’ve ever lied about your age, take a sip.",
  "Switch seats with someone on the other side of the table.",
  "Pick a player to do a dare or take 2 sips.",
  "If you’re wearing a hat, take 2 sips.",
  "Everyone who has never broken a bone takes 1 sip.",
  "Take a sip if you’ve kissed someone in the last week.",
  "Do a silly dance for 10 seconds or take 3 sips.",
  "Everyone who has a sibling takes 1 sip.",
  "Make a toast to the worst drinker in the group.",
  "If you’ve ever been in a car accident, take 1 sip.",
  "Take 2 sips and make a rule for the rest of the game.",
  "Everyone who has been to a music festival takes a sip.",
  "Speak in an accent for the next 5 minutes or take 3 sips.",
  "If you’re left-handed, take 1 sip.",
  "Challenge another player to a staring contest. Loser takes 2 sips.",
  "Everyone who has ever been to a different continent takes 1 sip.",
  "If you have a phone in your hand, take a sip.",
  "Choose someone to take a shot or drink 3 sips.",
  "If you can’t whistle, take a sip.",
  "Tell a joke or take 2 sips.",
  "If you’ve ever eaten something weird, take a sip.",
  "Everyone who’s been to the beach this year takes 1 sip.",
  "Take a sip if you’re wearing socks with sandals.",
  "Pick a player to act like an animal of your choice for 1 minute.",
  "Take 1 sip if you have ever played a prank on someone.",
  "Everyone who has played chess before takes a sip.",
  "If you’ve ever used a fake ID, take a sip.",
  "Take 2 sips if you’ve ever been to a concert alone.",
  "If you’ve ever skipped school, take 1 sip.",
  "Imitate a celebrity or take 2 sips.",
  "Everyone who’s had a birthday this year takes a sip.",
  "Everyone who has ever been to a wedding takes 1 sip.",
  "If you’ve ever had a pet fish, take 1 sip.",
  "Do your best impression of a famous movie quote or take 2 sips.",
  "Take a sip if you’ve ever had a crush on a teacher.",
  "Everyone who has done a cartwheel takes 1 sip.",
  "Choose a player to sing a song or take 3 sips.",
  "If you’ve ever been to a zoo, take 1 sip.",
  "Everyone who’s ever been to a theme park takes a sip.",
  "If you’ve ever had a nickname, take 1 sip.",
  "Start a chant or take 2 sips.",
  "Take a sip if you have ever broken something expensive.",
  "Imitate a famous character or take 2 sips.",
  "If you’ve ever dyed your hair a weird colour, take 1 sip.",
  "Tell an embarrassing story or take 3 sips.",
  "If you’ve ever eaten food out of a dumpster, take 1 sip.",
  "Everyone who likes pineapple on pizza takes a sip.",
  "Pick a player to describe their most awkward date or take 2 sips.",
  "Take a sip if you’ve ever lost your wallet.",
  "Speak in rhymes for the next 5 minutes or take 3 sips.",
  "If you’ve ever walked into a glass door, take 1 sip.",
  "Take a sip if you have ever eaten something spicy and regretted it.",
  "Choose a player to tell a random fact about themselves or take 2 sips.",
  "If you’ve ever been to a foreign country, take 1 sip.",
  "Everyone who has kissed a celebrity takes 1 sip.",
  "If you’ve ever been on TV, take 1 sip.",
  "Everyone who can do a split takes 1 sip.",
  "Tell a terrible pun or take 3 sips.",
  "Take 2 sips if you've ever run a marathon.",
  "If you have a fear of spiders, take a sip.",
  "Everyone who has eaten sushi takes a sip.",
  "Take 3 sips if you've ever been in a long-distance relationship.",
  "If you’ve ever been to a karaoke bar, take 1 sip.",
  "Name a country and take a sip if you’ve never been there.",
  "Everyone who’s ever gotten a speeding ticket takes 1 sip.",
  "Take 1 sip if you've ever been to a haunted house.",
  "If you’ve ever used the phrase 'YOLO', take 1 sip.",
  "Choose a player to impersonate you or take 2 sips.",
  "If you've ever stayed up all night, take 1 sip.",
  "If you've ever used a selfie stick, take 1 sip.",
  "Take a sip if you’ve ever had a job as a server.",
  "Everyone who has tried to play a musical instrument takes 1 sip.",
  "If you’ve ever made a prank call, take 1 sip.",
  "Everyone who has watched a reality TV show takes a sip.",
  "If you’ve ever been to a casino, take 1 sip.",
  "Everyone who likes chocolate ice cream takes a sip.",
  "If you’ve ever skipped a meal to sleep in, take 1 sip.",
  "If you’ve ever used an online dating app, take 1 sip.",
  "Choose a player to do 10 push-ups or take 3 sips.",
  "If you’ve ever fallen asleep in class, take 1 sip.",
  "Take 2 sips if you've ever made a mixtape.",
  "If you've ever had an awkward first date, take 1 sip."
];


// Function to create the chessboard
function createChessboard() {
  const chessboard = document.getElementById('chessboard');
  chessboard.innerHTML = ''; // Clear existing grid

  for (let i = 0; i < 64; i++) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.setAttribute('data-index', i);

    // Assign random instruction to each square
    const randomInstruction = instructions[Math.floor(Math.random() * instructions.length)];
    card.setAttribute('data-instruction', randomInstruction);

    // Event listener to flip the card
    card.addEventListener('click', flipCard);

    chessboard.appendChild(card);
  }
}

// Function to flip a card and reveal the instruction
function flipCard(event) {
  const card = event.target;
  if (!card.classList.contains('flipped')) {
    card.classList.add('flipped');
    card.textContent = card.getAttribute('data-instruction');
  }
}

// Function to reset the board
function resetBoard() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.classList.remove('flipped');
    card.textContent = '';
  });
  createChessboard();
}

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
  createChessboard();

  const resetButton = document.getElementById('reset-button');
  resetButton.addEventListener('click', resetBoard);
});
