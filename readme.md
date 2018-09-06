Working example can be found  at pjotrleshkin.com/lhv
Additionally for mobile-responsive design I've added a feauture of bank card color change(onclick) and smootр-scroll.
Project has no dependencies and is done in vanillaJS/HTML5/CSS3 stack. 

-----
Project Notes:
1.Images are stored in /img , and  they are divided in folders by their filetype.It is done for holding file structure tight and easy for navigation.

2.Website  CSS for developement is divided into 2 files, 'styles.css' stands for general stylesheet, and  'smallscreen.css' stands for mobile-ready stylesheet. 
There are minified css version which contains both of those files.

Both of developement .css files are structured in  the same way as webpage elements go from top to bottom.
For example, if 'top-nav' class is first in html page, it is first in  .css files, if footer is the last one, it will be the last in .css.
Done for ease of understanding and maintainability.

3.HTML5 is linted with W3C validator. Only error is that 'button' should not be child of <a> element. Fix can be found  at https://stackoverflow.com/questions/6393827/can-i-nest-a-button-element-inside-an-a-using-html5 ;
For production product it definetly needs to be fixed, but for  I decided not to go with that(at least for now)because it will affect readability of HTML(at least on my mind).
If you would like me to fix this just write me.

4.CSS3 is also linted, it is completely valid(csslint.net).
------
Answers for questions you might have:
1. Why not to use jQuery for scroll and animations, and Bootstrap for mobile-responsiveness?
1.1 That project would require big amount of stock Bootstrap customisation.It can be quite hard to do it well. At Your website I've seen that sometimes there is used '!important', what means that at some point in the future  there is a chance of 'specifity wars' and overall in future CSS updates can be unstable, and website can behave differently on different devices.
So, I hadn't used bootstrap in sake of validity of code. You can say that website will be maintained anyway, but between valid html/css and css with warnings  I would chose first-one no-brainer.

1.2 jQuery. First of all, jQuery weigths some kb, secondly - it always can be pulled into the project later.
Speaking about kilobytes, my code(index.html + styles.min.css +  scroll.js) weights 17 kilobytes, while jQuery  weights 30kb(minified) and Bootstrap 4 almost 10 times more than my project(150kb minified).

In case of any questions about any part of the project please, contact me.


