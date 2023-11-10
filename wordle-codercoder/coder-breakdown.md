# Functional Requirements

## Gameplay

6 tries to guess a 5-letter word

### Pick a solution word

Store solution word in JSON object / array ✅
when game is loaded, choose random item from array ✅
set solution to that word ✅

### Making a guess

Detect keypresses

- if keypress is a letter ✅
  - update letters attribute ✅
    - update tile markup based on 'letters' value ✅
    <!--  -->
- if keypress is backspace ✅
  - delete last letter in 'letters' ✅
  - update tile markup based on 'letters'

Don't run update functions if "letters" length == 5 ✅
Typing in the letter will display the letter in the tile ✅
Backspace will delete letters ✅
Enter will submit guess

### Submit guess

Pressing Enter will submit guess

- compare each letter with corresponding letter in solution word ✅
- update the state/color of the letter ✅
- if all letters are correct / green, game is won

Guesses must be a real word, "in word list"

Guess colors (data-state):

- gray: 'absent,' letter not in word
- yellow: 'present', letter in word, but in wrong position
- green: 'correct,' letter in word and in correct position

Hard mode: present or correct word must be used in subsequent guesses

Guesses are saved in local storage

## Design

Tiles 5x6
Virtual keyboard

## Interactions

When typing a letter:

- border of the tile changes to light gray ✅
- blinking in animation with letter
- backspace will remove letter, border changes back to dark gray ✅
- enter will submit guess

When submitting a guess:

- tiles will flip up and background color will change based on guess
- slight delay between each tile flipping
- background color changes when tile is flat, i.e. cant see it

## Colors

:root {
/_ color _/
--darkGreen: #538d4e;
--gray: #3a3a3c;
--darkBlue: #171321;
--white: #f7f8fa;

/_ fonts _/
--title: "Arvo", serif;
--tile-letter: "Libre Franklin", sans-serif;

/_ reference color and font _/
--color-correct: var(--darkGreen);
--color-border: var(--gray);
--color-background: var(--darkBlue);
--color-white: var(--white);

--font-title: var(--title);
--font-tile: var(--tile-letter);
}
