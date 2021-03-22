var phrases = [
    'You\'re the best <3',
    'I love you',
    'Partners in crime!',
    'I think about you a lot',
    'You give me a heart-on',
    'Lemme smash',
    'I appreciate you',
    'Thank you for all that you do for me',
    'Nice face, loser',
    'You give great hugs',
    'Your smile makes my heart warm',
    'Your smile makes my armpits warm',
    'You\'re perfect just the way you are',
    'Do not march on Moscow',
    'I\'d let you test my software until it was hardware ;)',
    'You\'re beautiful on the inside. Trust me, I checked',
    'We should grow potatoes together after the apocalypse happens',
    'We should intertwine our old, wrinkly fingers in 2069',
    '*saxophone intro from Careless Whisper*',
    'You make me UwU',
    'If I had an imaginary friend it\'d probably still be you',
    'BEGIN TRANSACTION SELECT \'<3\' AS [Message To You] ROLLBACK',
    'Nice butt',
    'If we were two zombies I would sit in a boat with you',
    'MmmMMMMMmMMMMMMmMmnmMmMmmmmmMMMMM'
]

var contentDiv = document.getElementById('content');
var content = phrases[Math.floor(Math.random() * phrases.length)];
contentDiv.innerHTML = content;

var body = document.body;
var orientation = Math.floor(Math.random() * 360) + 1 + 'deg'
var midStop = Math.floor(Math.random() * 50) + 26 + '%'
var colourA = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) 0%';
var colourB = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) ' + midStop;
var colourC = 'rgba(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',1) 100%';
var gradientString = 'linear-gradient(' + orientation + ', ' + colourA + ', ' + colourB + ', ' + colourC + ')'
console.log(gradientString)
body.style.backgroundImage = gradientString;

