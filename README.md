# Javscript-Based-Game
You will make a javascript game. It can be text-based or lightly graphical depending on your current skill level 
(if you've never done javascript before then do a text-based game but if you're an old pro then you should use 
some graphics and some basic MVC architecture).

I want you to use object-oriented paradigms in your code.

Here is a list of "themes", pick one and run with it:

Nothing to hide
Freefall
Down the river
Casual Connections
Circle of life
Expect the unexpected
Action and Reaction

CISC479: Client-Side Engineering
by Jon Gabriel (gabrielj@udel.edu) & David Geron-Neubauer

Game ideas:

Expect the unexpected theme (21):
    - logic game that generates a set of rules as the game goes on
    - game counts from 1-21
        - At the beginning of the game 7 and 14 are the only
        numbers with rules (as the game counts, you input 14
        when the number 7 comes up; and you input 7 when the number
        14 comes up.
        - As you complete the game and reach 21, you create a rule
        for a new number (for example, when you count to the #3 your
        input string, in order to keep counting, is to write
        "butts" instead of just the #3)
        - As the game continues, almost all numbers from 1-21 will
        have a different rule associated to it (ultimatly increasing
        with difficulty as more rules are necessary to be remembered
        by the players
    - Have two players and profiles (socket and IOs)
        - Hints: for certain amount of times rule is missed by a user
        - Adds some taunting text as the user types in a rule
            - "Are you sure?"
            
JavaScript comments: This would involve javascript inputs
The user inputs would be binded to a possible switch case
of rules that will be matching strings.
- Have everything be toUpperCase or toLowerCase to be consistent with rule creation

HTML/CSS comments: Need a cool interface


        
