# Projet n°14 - Développeur Applications Javascript React

# WealthHealth - HRNet

> Faites passer une librairie jQuery vers React


<p align="center">
  <img src="https://user.oc-static.com/upload/2020/08/14/15974125765772_image2.jpg">
</p>


> INTRODUCTION

Je travaille pour le département technologique d'une grande société financière, WealthHealth. Cette société utilise une application web interne, appelée HRnet, qui gère les dossiers des employés. L'application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables et une augmentation des plaintes en interne.

Je suis chargé de radicalement transformer et rajeunir l'application actuelle en la convertissant en application React rapide et fonctionnelle. Les principales tâches à réaliser sont:

- Convertir l'ensemble du projet HRNet en React. 
- Convertir l'un des quatre plugins jQuery actuels en React. 
- Remplacer les 3 plugins jQuery restants par des composants React codés moi-même, ou importés depuis des libraires existantes.
- Effectuer des tests de performance Lighthouse en comparant l'ancienne et la nouvelle application. 
- Créer une nouvelle version des pages "Create Employee" et "Employee List" avec React.
- Ajouter un système de gestion d'état (la version actuelle utilise un stockage local).
- Exporter le plugin converti sur NPM.

## 💻 Technologies used

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=css,react,jest,github,html,js,jquery,rollupjs,vite,vercel,vscode" />
  </a>
</p>

## 📚 Original jQuery source code and issues

- https://github.com/JaRoD41/P14_HRNet_original_jQuery

- https://github.com/OpenClassrooms-Student-Center/P12_Front-end/issues


## 🚀 Converted React NPM Component

- https://github.com/JaRoD41/components-library-by-jarod41


## 🚀 Frontend installation

- Install NodeJS : [NodeJS](https://nodejs.org/en/)
- Clone the repo : `git clone https://github.com/JaRoD41/hrnet.git`
- Install dependencies : `npm install`
- Launch the app : `npm run dev`
- I recommend using [VSCode](https://code.visualstudio.com/) with [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension

## 📝 Performance Tests

Nous voulons également mesurer des données quantifiables (ex. : temps de chargement des pages, appels réseau) pour nous assurer que la conversion de l'application à React améliore effectivement les performances.





## 📝 Expected deliverables

- A TXT file containing the URL of :
  - the GitHub repository of the converted jQuery plugin (only one plugin)
  - the GitHub repository of the entire React project
  - the React converted library published on NPM

- A PDF Lighthouse performance report before/after the React conversion
