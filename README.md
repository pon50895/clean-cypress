## Prerequistes
1. Node
2. NPM

## Install Cypress
```
npm install cypress --save-dev
```

## Update for Project Name
Please update the project name in the following files:
1. package.json
2. package-lock.json
3. other information: author, description, etc.

## Update Git remote
```
git remote set-url origin <your-git-repo>
```

## Force Push to your Git REPO
```
git push origin main -f
```

## Running for Manual
```
cd <your-project>
npx cypress open -e envName=<your-env>
```
or shortcut registed in package.json, for example cy:staging
```
cd <your-project>
npm run cy:dev
```
then choose E2E, choose explorer and start to test / modify your script
