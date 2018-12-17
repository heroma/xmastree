# xmastree
A code challenge looking for the implementation with the minimum javascript code possible of a basic xmas tree.

## Description
I recently knew about this code challenge and I tried to programm my own minimum javascript code to print a xmas tree with n-rows and a star "*" at the top.

And this is the result with 140-characters implemented as a function solution with one param; or just 124-characters as an inline code to execute from the console.

## The challenge
As far as I can remember, the challenge was to program at any language (I have choose Javascript) and with the minimum code possible a xmas tree with n-rows, where:
1. There is a first row with the star "*"
2. There is a second row with just one zero "0"
3. Each new row add two zeros
4. The tree is visual well printed

## xmastree.js 
The code implemented as a function where the param is the number of rows to be printed (140-char version):

```js
> var xmastree=a=>'\n'+[R=a,''][1].padStart(R+1,'0').split('').map((a,b)=>(b==0?'*':a).repeat((s=b>1?b-1:0)*2+1).padStart(R+s,' ')).join('\n')
> xmastree(6)
```
```text
"
     *
     0
    000
   00000
  0000000
 000000000
00000000000"
```

Or just, as an inline instruction (124-char version):

```js
> '\n'+[R=3,''][1].padStart(R+1,'0').split('').map((a,b)=>(b==0?'*':a).repeat((s=b>1?b-1:0)*2+1).padStart(R+s,' ')).join('\n')
```
```text
"
     *
     0
    000
   00000"
```

Where the `R=3` value assignation are the number of rows.

## Deep xmastree.js 
`\n`
The new-line is to clean the console output and print the star of the tree from an empty line.

`[R=3,''][1]`
I need the number of total rows `R` avalaible throught the function to compute, first the number of rows, and second the number of blank spaces needed on each row.
The second item of this array is the initialization of the string.

`.padStart(R+1,'0').split('').map((a,b)…`
First, I create a 0s string (`padString`) with the length of the number of rows plus one (to contain the star).
Then, I `split` the string into an array with an element (`'0'`) of each string character.
Finally, I process each element with `map`where `a` is the element by itself and `b` is each index on the array.

`(b==0?'*':a)`
The first row is the asterisk one.

`.repeat((s=b>1?b-1:0)*2+1)`
The first two rows are special ones: the asterisk and the first zero; so them will be repeated only once `0*2+1`. The zeros of the other rows need to be repeated `(rowIndex-1) * 2 +1`-times; for example, for the third-row, `(3-1)*2+1=5`-times to be repeated the `0`.

`padStart(R+s,' ')`
Finally, I need to center the each row of the xmas tree. So I need, for each row as many blank spaces as the total length of the row `R+s` where R is the total rows (the initial param) and s was calculated in previous step and it is zero to the first two rows and `rowIndex-1` to the other rows. For example, if the xmas tree was initilized with 5-rows, the last one will be a 9-zeros row so it will need no blank spaces at begining `R=5, rowIndex=5 (1 asterisk and 5 zeros rows » array index from 0 to 5), R+rowIndex-1=9 == row.length (padStart has no effect)`.

Finally `join('\n')` just to join the array on a string to render the tree on the console where each array element is separated with a new-line.

**Best regards and Merry xmas, folks!**
