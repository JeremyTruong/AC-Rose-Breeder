# AC-Rose-Breeder
A web application developed using React and MUI component library that displays potential rose offspring given the genes of two parent roses in the game Animal Crossing: New Horizons.

The application can be found here: https://jeremytruong.github.io/AC-Rose-Breeder/

# About
A blue rose is the hardest rose to get in Animal Crossing: New Horizons. When researching how to obtain one, I learned that the genetic system behind flowers in this game is, unexpectedly, very complex.

Flowers in ACNH use basic Mendelian genetics. The colour of a child flower depends on the genes of the two parent flowers. There are 4 different genes: R, Y, W, S. 

R, Y and W control how red, yellow, and white a flower is. S controls the shade of the flower. 

For each gene, there are 3 different combinations of alleles. 
1. Two recessive (rr)
2. One dominant, one recessive (Rr)
3. Two dominant (RR)

Roses are the only flowers in the game which use all four genes, and only one combination of them produces a blue rose: RR, YY, WW, ss.

A helpful guide to learn more can be found [here.](https://docs.google.com/document/d/1ARIQCUc5YVEd01D7jtJT9EEJF45m07NXhAm4fOpNvCs/edit)

The proccess to breed a blue rose is very specific, and takes a long time. When going through this proccess myself, I found there was no tool anywhere that told me what possible child roses I could breed given I knew the genes of the two parent roses. I made a command line program in C to solve this problem for myself. Afterwards, I would transfer the logic behind the program to a webpage created using React and Material-UI, and deploy it to GitHub Pages for anyone to use.

# To Do
1. Add other flowers. Roses are the most complex flower in the game, thus creating an app to help myself breed them was what I needed. Now that the basic application is made, adding other flowers should be a simpler task.
2. As I get more comfortable with React and MUI, I'd like to update the design.
