### Developer Setup

This repo features a Visual Studio Code dev container which provides the developer with a containerized environment and automates build, deploy, and local development to maximize productivity. 

Clone this repo, then `cd` into it and run `code .` or Open Visual Studio Code and Navigate to this folder. Click on the prompt for opening the folder in a dev container. That's it! Initial build will take care of installing all dependencies and the app should be automatically deployed to localhost on subsequent launches. 

### Adding your own content

The only sources of content are the Home and About pages, the projects on the project page, and the resume on the resume page.

To change the content on the Home and About pages, make changes directly to the Home and About components. You can add/modify/remove cards on the project page by editing `src/Assets/Data/projectList.js`: the `imgPath` field must be the filename of an image file in `src/Assets/Images/Projects`. To change the resume, you will need to change `src/Assets/Data/resume.pdf` (must be a PDF) and change the URL in `src/Components/Resume/ResumeRender.js`, the latter for which, in the interest of simplicity, I recommend a similar github raw path.

### Pushing to Github Pages

You can push your changes to github pages using `npm run deploy`.

Please follow the [instructions](https://create-react-app.dev/docs/deployment/#github-pages) on serving react apps with github pages!
