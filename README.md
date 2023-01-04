I want you to reperoduce the error. To reproduce the error please clone the repo https://github.com/michalstrzelecki/next-translate-n1311 and run npm run dev. Then create the src folder in the root of the project and simply move the pages folder there. Restart the dev server. The error will appear.
![obraz](https://user-images.githubusercontent.com/3853055/210546357-487959a4-f458-4730-aef2-bd3d8155ceeb.png)

I find it the only way to reproduce the error this way. In my work project I do not move the files all around and the error is there already on the next 13.1.1.

I also realized that removing all dynamic imports from _app file, when I am using next 13.1.1, solves the issue.
