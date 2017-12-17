# Chapitre 1 : Introduction

## Qu’est-ce que JavaScript ?
JS est un langage de programmation crée en 1995 par [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich) pour Nescape, le navigateur phare de l'époque. Selon l'anectode il fut conçu en [10 jours](https://brendaneich.com/tag/javascript/).

## Comment marche JavaScript ?
Les navigateurs sont des programmes installés sur un ordinateur (machine hôte). Un navigateur est une **application bureaau** (desktop application) qui intègre un interpréteur JavaScript ainsi qu'un environnement d'exécution (runtime execution) isolé de la machine hôte. En appelle cela une **machine virtuelle**.

Il faut se rappeller qu'un script JavaScript (ceci est vrai pour n'importe quel autre language) n'est qu'un simple **fichier de texte**, appelé code source. Lorsqu'un internaute tappe une adresse **url** dans son navigateur, il fait ce qu'on appelle une **requête HTTP**. Le site web répond et envoie des resources (code source, images, etc.) au client.  Le client analyse le code source JS, transforme (compilation) celui-ci en byte code compréhensible par la [machine virtuelle] (http://creativejs.com/2013/06/the-race-for-speed-part-2-how-javascript-compilers-work/index.html) qui donc peut l'interpréter. Le fait que le byte code n'est pas interprété par ordinateur hôte directement est pour des raisons de sécurité.

JavaScript peut aussi être également exécuté côté serveur. Nous nous concentrerons dans ce cours de JS exécuté côté client, c'est-à-dire le navigateur.

https://stackoverflow.com/questions/15395347/does-a-browser-truly-read-javascript-line-by-line-or-does-it-make-multiple-passe
## Contexte

L'utilisation de JS fut d'abord limitée à faire des interactions du côté client lors de la survenance d'événements (click, touche clavier, etc.). Ceci est possible grâce au [DOM](https://en.wikipedia.org/wiki/Document_Object_Model). Le DOM est une [API](https://en.wikipedia.org/wiki/Application_programming_interface) permettant d'accéder et de modifier les éléments de la page HTML. Celle-ci est un document structuré en hiérarchie (arborescence).

![Minion](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/220px-DOM-model.svg.png)

Au début du [web dynamique](http://royal.pingdom.com/2007/12/07/a-history-of-the-dynamic-web/) (1993), les technologies côté serveur ont connu leurs heures de gloire avec notamment [CGI](https://en.wikipedia.org/wiki/Common_Gateway_Interface) ensuite talonné par PHP. Dans les années 2000, des frameworks intégrant la plupart du temps le pattern MVC sont apparus (ASP.NET, CakePHP, Ruby on Rails, etc.). La création (rendu) de la page web se fait du **coté server**.

Avec l'arrivée d'[Ajax](https://en.wikipedia.org/wiki/Ajax_(programming) vers *2005* et des libraires telles que [jQuery](https://jquery.com/) permettant entre autres de mettre en oeuvre Ajax facilement, JS a vu son champ d'utilisation étendu.

La sortie du navigateur [Google Chrome](https://en.wikipedia.org/wiki/Google_Chrome) en *2008* avec sa machtine virtuelle JS appelée [V8](https://en.wikipedia.org/wiki/V8_(JavaScript_engine)) fut une véritable révolution. Les performances de JS ont été énormément ameliorée grâce à des techniques avancées ([JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation)). JS a alors pris une nouvelle dimension.

Le montée en puissance de JS a apporté beaucoup de changement dans la façon de de développer des applications web. Vers 2009, les framework et librairie cliente exploitent les performances JS tel que Backbone, Angular et React, le rendu de la page html se fait du côté client. En effet, le serveur se limite à fournir les données nécessaires à l'application. A titre différentes interfaces exitent, tels que [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) et GraphQL.

## Standard
Tout comme HTML et CSS, JS est un [standard ouvert](https://fr.wikipedia.org/wiki/Format_ouvert) (open standard).

JavaScript est standardisé depuis 1997 par un organisme appelé [Ecma International](https://www.ecma-international.org/default.htm). Le standard de JavaScript a été appelé ECMAScript, car JavaScript une marque déposée.


Question 1 : comment s'apelle la machine virtuelle de google Chrome
