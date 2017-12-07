# Chapitre 1 : Introduction

## Qu’est-ce que JavaScript ?
JS est un langage de programmation crée dans les années 1990 par [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) pour Nescape, le navigateur phare de l'époque. Selon l'anectode il fut concu en 10 jours.

## Comment marche JavaScript ?
Les navigateurs sont des programmes installés sur un ordinateur. On parle de desktop application. Ils intègrent un interpréteur JavaScript ainsi qu'un environnement d'exécution isolé du programme principal. En appelle cela une machine virtuelle.

Il faut se rappeller qu'on script JavaScript n'est qu'un simple fichier de texte. Quand un site web envoyé du HTML, CSS et JS au client sous forme de simple texte. Le client analyser ces informations, et transforme (compilation) ce texte en de véritables instructions compréhensible par la machine virtulle (appelé byte code).

## Norme
SQL est normalisé par ANSI depuis 1986 et par ISO depuis 1987. Plusieurs versions ont été
publiées depuis lors. Certains SGDBR’s existaient déjà avant la normalisation, ce qui explique
pourquoi certaines fonctionnalités de SQL sont encore implémentées de façon différente
parmi les différents SGDBR’s.


## Contexte

L'utilisation de JS fut d'abord limitée à faire des interactions du côté client lors de la survenance d'événements (click, touche clavier, etc.). Ceci est possible grâce au [DOM](https://en.wikipedia.org/wiki/Document_Object_Model). Le DOM est une [API](https://en.wikipedia.org/wiki/Application_programming_interface) permettant d'accéder et de modifier les éléments de la page HTML. Celle-ci est un document structuré en hiérarchie (arborescence).

![Minion](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/220px-DOM-model.svg.png)

Au début du [web dynamique](http://royal.pingdom.com/2007/12/07/a-history-of-the-dynamic-web/) (1993), les technologies côté serveur ont connu leurs heures de gloire avec notamment [CGI](https://en.wikipedia.org/wiki/Common_Gateway_Interface) ensuite talonné par PHP. Dans les années 2000, des frameworks intégrant la plupart du temps le pattern MVC sont apparus (ASP.NET, CakePHP, Ruby on Rails, etc.). La création (rendu) de la page web se fait du **coté server**.

Avec l'arrivée d'[Ajax](https://en.wikipedia.org/wiki/Ajax_(programming) vers *2005* et des libraires telles que [jQuery](https://jquery.com/) permettant entre autres de mettre en oeuvre Ajax facilement, JS a vu son champ d'utilisation étendu.

La sortie du navigateur [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome) en *2008* avec son moteur JS appelé [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) fut une véritable révolution. Les performances du moteur ont été énormément ameliorée grâce à des techniques avancées ([JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation)). JS a alors pris une nouvelle dimension.

En *2009*, sortent [AngularJS](https://angularjs.org/) et [Node.js](https://nodejs.org/en/) exploitant les performances du moteur V8.

Les frameworks JS ont beaucoup changé la façon de développer des applications web. Le traitement pour afficher les divers éléments de la page HTML (rendu) se fait principalement du côté client. A la suite d'un événement, seule une partie de la page est mise à jour ce qui, d'une part, améliore la UX, et d'autre part, allège la communication entre client et serveur. En effet, le serveur se limite à fournir les données nécessaires à l'application. L'accès aux données par une interface [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) est particulièrement bien adaptée à ce type d'application.
