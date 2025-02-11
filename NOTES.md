graphql package
Il s'agit de l'implémentation principale de GraphQL en JavaScript.
Il fournit les fonctionnalités pour définir des schémas GraphQL, analyser et valider des requêtes GraphQL, exécuter des requêtes sur un schéma et formater les réponses.
graphql n'est lié à aucun serveur ou framework client spécifique ; c'est une bibliothèque autonome qui peut être utilisée dans divers environnements JavaScript.
@apollo/server
Ce package fait partie de l'écosystème Apollo et est utilisé pour construire des serveurs GraphQL en Node.js.
Il fournit des outils et des utilitaires pour créer et gérer des schémas GraphQL, traiter les requêtes GraphQL entrantes, exécuter des requêtes et envoyer des réponses.
@apollo/server est construit sur le framework express populaire, ce qui facilite l'intégration de GraphQL dans les applications web Node.js existantes.
Dans l'ensemble, @apollo/server simplifie le processus de création et de maintenance des serveurs GraphQL dans les environnements Node.js.
Qu'est-ce qu'un schéma GraphQL ?
Un schéma GraphQL est un concept fondamental dans GraphQL.
Il définit la structure des données que les clients peuvent interroger et les opérations qu'ils peuvent effectuer. Un schéma dans GraphQL se compose généralement de deux parties principales : les typeDefs et les résolveurs.
Qu'est-ce que les TypeDefs ? (ou définitions de types)
Les définitions de types définissent la forme des données disponibles dans l'API GraphQL. Elles spécifient les types d'objets qui peuvent être interrogés et les relations entre eux.
Qu'est-ce que les Resolvers ? (ou résolveurs)
Les résolveurs sont des fonctions qui déterminent comment récupérer les données associées à chaque champ dans le schéma.
Apollo Client
Apollo Client est une bibliothèque complète de gestion d'état pour JavaScript qui vous permet de gérer à la fois les données locales et distantes avec GraphQL. Utilisez-la pour récupérer, mettre en cache et modifier les données de l'application, tout en mettant automatiquement à jour votre UI.
Fonctionnalités
Récupération de données déclarative : Écrivez une requête et recevez des données sans suivre manuellement les états de chargement.
Expérience développeur excellente : Profitez d'outils pratiques pour TypeScript, les devtools Chrome / Firefox et VS Code.
Conçu pour React moderne : Profitez des dernières fonctionnalités de React, comme les hooks.
Adoption progressive : Ajoutez Apollo à n'importe quelle application JavaScript et intégrez-le fonctionnalité par fonctionnalité.
Compatible universellement : Utilisez n'importe quelle configuration de build et n'importe quelle API GraphQL.
Conduit par la communauté : Partagez vos connaissances avec des milliers de développeurs dans la communauté GraphQL.
Récupération de données déclarative
Apollo Client gère le cycle de requêtes de A à Z, y compris le suivi des états de chargement et d'erreur. Il n'y a pas de middleware ou de code boilerplate à configurer avant de faire votre première requête, et vous n'avez pas besoin de vous soucier de la transformation ou de la mise en cache des réponses. Tout ce que vous avez à faire est de décrire les données dont votre composant a besoin et de laisser Apollo Client faire le gros du travail.
jsx
function ShowDogs() {
	//  Le hook useQuery prend en charge des fonctionnalités avancées comme une interface utilisateur optimiste, le refetching et la pagination.
	const { loading, error, data } = useQuery(GET_DOGS);
	if (error) return <Error />;
	if (loading) return <Fetching />;

	return <DogList dogs={data.dogs} />;
}
Mettre en cache un graphe n'est pas une tâche facile, mais ils ont passé des années à résoudre ce problème.
jsx
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
	cache: new InMemoryCache(),
});
Installation
bash
npm install @apollo/client graphql
@apollo/client : Ce package unique contient pratiquement tout ce dont vous avez besoin pour configurer Apollo Client. Il inclut la mise en cache en mémoire, la gestion de l'état local, la gestion des erreurs et une couche de vue basée sur React.
graphql : Ce package fournit la logique pour analyser les requêtes GraphQL.