# Docker

## Definizione
Docker è una piattaforma per lo sviluppo, la distribuzione e l'esecuzione di applicazioni in contenitori leggeri e isolati. I contenitori Docker includono tutto il necessario per eseguire un'applicazione, come il codice, le dipendenze e le librerie, garantendo la portabilità e la consistenza dell'ambiente di esecuzione.

## Link utili
[Sito ufficiale docker](https://www.docker.com/)

[Guida a docker](https://www.html.it/guide/docker/)

[Docker desktop](https://www.docker.com/products/docker-desktop/)

[Repository immagini ufficiale docker](https://hub.docker.com/)

## Comandi principali

`docker version:`
Mostra la versione di Docker installata sul sistema.

`docker info:`
Fornisce informazioni dettagliate sullo stato di Docker sul sistema.

`docker pull <immagine>:`
Scarica un'immagine Docker dal Docker Hub o da un registro personalizzato.

`docker images:`
Elenca tutte le immagini Docker presenti localmente sul sistema.

`docker rmi <immagine>:`
Rimuove un'immagine Docker dal sistema.

`docker build -t <nome_immagine> .:`
Crea un'immagine Docker dal Dockerfile presente nella directory corrente e assegna un nome.

`docker ps:`
Elenca tutti i contenitori in esecuzione.

`docker ps -a:`
Elenca tutti i contenitori, inclusi quelli fermi.

`docker run <opzioni> <immagine>:`
Avvia un nuovo contenitore basato sull'immagine specificata.

`docker exec -it <contenitore> <comando>:`
Esegue un comando all'interno di un contenitore in esecuzione.

`docker stop <contenitore>:`
Ferma un contenitore in esecuzione.

`docker start <contenitore>:`
Avvia un contenitore precedentemente fermato.

`docker restart <contenitore>:`
Riavvia un contenitore.

`docker rm <contenitore>:`
Rimuove un contenitore.

`docker logs <contenitore>:`
Visualizza i log di un contenitore.

`docker network ls:`
Elenca tutte le reti Docker disponibili.

`docker volume ls:`
Elenca tutti i volumi Docker presenti sul sistema.
