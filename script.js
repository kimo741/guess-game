'use strict';
let losers = [
  'a3trf b ser 5teer',
  'afd7 wa7d aw wa7da mn alle a3deen',
  'mwkf mo7rg at7tet feh',
  'a3ml we4 3beet w afdl sabt 3leh 2 min',
  'klm vodafon as2lhom 3la (heir routine) alfnana sherehan ',
  '7awl tz8rt z8rota',
  'spank alle 2a3d 3la ymenk',
  'ro7 lltrabeza alle gambk be3lhom mo5drat',
  '  om hat jelecola',
  'ol b soot 3aly ya mama 5lst t3ale 4tafene',
  'ro7 3la ay tarabeza nzl 3leha 3seer w ro7 a4rbo',
  'gm3 5 gneh mn alnas alle 7walena (b4rt mta5od4 mn 7d aktr mn gneh)',
  'albnt alle kareem y4awr 3leha tboso',
  'as2l 7d mn alle 7walena htt5do a alnahrda',
  'ro7 l ay cuples w a3od m3ahom 7l m4aklhom',
  'ro7 l cuples w ol llbnt bt5onene (lw bnt al3ks )',
  '5od ndara mn wa7d mt3rfo4 w albsha atswr beha w adehalo tane',
  'a2delna sgarten dlw2te',
  'hatlna 5 sgayr mn nas mt3rfhom4 w kol sgara tkon no3 mo5tlf',
  'hn3mlk bosa 3la r2btk b alroj w atswr beha w arf3a story',
  'a4rb sprit 3la bo2 wa7d',
  'as2l ay 7d mt3rfo4 3la a2rb deler ',
  'a3od 3la korse',
  'om lef 7waleen ay tarabeza 10 mrrat',
  'am4e 7fay f al4ar3',
  'om 5od wla3a mn ay 7d w wl3 sogara w atfeha f altfeha odamo w am4e',
  '5od alm (aw ay 7ag m4 8alya) w om be3o b 10 gneh',
  'afrok sogara 3la f almkan alle nta a3d feh aknk ht4rb sogarten',
  'ar2os slow m3 ay wa7da (lw bnt yb2a al3ks)',
  '3kkb dlw2te (ayn kan nta fen)',
  'atswr sora (ammer al27zan) w arf3ha story ',
  'om bos kol alle a3den (tb2a abn m7zoza lw m3ana nas 8erba)',
  'hat jelicola w akl kol wa7d fe bo22o',
  'hat kees mnadeel w be3o',
  'ro7 hatlna kinder',
  'ro7 l ko4k b 200 gneh w olo 3ayz lbana (wlazm mn al 200gneh)',
  'a2t3 alkartela mn 3lbt sgayrk algdeda',
  'klm rkm 34wa2e w a3ml feha 3yl rembo',
];

let Mission = new Audio('Mission Impossible.mp3');
let susb = new Audio('The Journey.mp3');
let error = new Audio('Error.mp3');
// Mission.play();
let success = new Audio('Mohamed Ramadan Ringtones.mp3');
// Mission.loop = true;
// console.log(losers.length);

// console.log(losers[1]);
// console.log(losers[Math.trunc(Math.random() * losers.length) + 1]);

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 10000) + 1;
let score = 10;
let highscore = 0;

const gamerName = prompt('Whats Your Name 👈');
const gift = prompt('Whats Gift Do You wnat , If You Win 🎃🎊');
const giveHem = prompt('From How  😎😈');
// if (gamerName === null) {
//   return;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

if (gamerName === 'Kareem') {
  document.querySelector('.number').textContent = secretNumber;

  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';
  displayMessage(
    ` Your Are My Maker You Win Without Any Play Thanks For Making Me 😍😍❤❤  `
  );
  // let success = new Audio('Mohamed Ramadan Ringtones.mp3');
  success.play();
}

document.querySelector('.check').addEventListener('click', function () {
  susb.play();
  if (score < 5) {
    susb.pause();
    Mission.play();
  }

  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage('⛔️ No number!');

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    // displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (gamerName === 'esraa') {
      displayMessage(`🎉Correct Number! Esraa❤ Ask for A Gift From Kareem  `);
    } else {
      displayMessage(
        `🎉 Correct Number! Mr/Mss: ${gamerName}::: 
        ${giveHem} Give Him/his ${gift} You Must do It `
      );
    }
    susb.pause();
    Mission.pause();
    success.play();
  }
  // When guess is wrong
  else if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage(
        `Mr/Mss: ${gamerName} 💥 You lost the game!, your secret num: ❗${secretNumber}❗, your punishment:😎👉 ${
          losers[Math.trunc(Math.random() * losers.length) + 1]
        }💀`
      );
      Mission.pause();
      error.play();
      document.querySelector('.score').textContent = 0;
      if (gamerName === 'esraa') {
        displayMessage(
          `🎉 Mss:${gamerName} 💥 You Lost The Game! But You Gained Kareem Hug him or Kiss Him Now 👈 😈 He Wouldn,t accept punishment you , but i would have prefarred it 👿💀 `
        );
        Mission.pause();
        error.play();
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 10) + 1;
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
//   // When guess is too high
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📈 Too high!';
//     score--;
//     document.querySelector('.score').textContent = score;
//   } else {
//     document.querySelector('.message').textContent = '💥 You lost the game!';
//     document.querySelector('.score').textContent = 0;
//   }

//   // When guess is too low
// } else if (guess < secretNumber) {
//   if (score > 1) {
//     document.querySelector('.message').textContent = '📉 Too low!';
//     score--;
