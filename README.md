# SMS Brigadistas

Un sistema de comunicación con SMS

## Configurar

Este proyecto usa variables de ambiente para funcionar. Para la mayoría
de los casos, los defaults funcionan pero información como las llaves
privadas deben ser especificadas. Copia el archivo en `config/env.dist`
a `.env` y actualiza los valores

Cuando lo ejecutes con `make run`, va a agarrar esos valores
automaticamente. Si lo estás haciendo de la manera dificil, necesitas
cargar las variables a tu ambiente. Debes poner la variable
`SMS_BRIGADISTAS_ACCOUNT_SID` a que coincida con el sid de tu cuenta.

## Correr localmente

Necesitas [Docker][docker] para correr el proyecto.

* Corre la imagen con `make run`

## Correr localmente de la manera dificil

Si no quieres o puedes usar docker, también puedes correrlo de la manera
old school:

1. Instala las dependencias con `npm install`
2. Ejecuta con `npm start`

## Construir la imagen

También puedes:

* Construir la imagen con `make build`
* Construir y subir la imagen con `make upload`
* Limpiar el ambiente con `make clean`

## Configurar Twilio

TBD

También necesitas tu sid de twilio. Este se obtiene de "[Account
Settings][account-settings]" en el dashboard.

## Estilo del código

Este proyecto usa la [guía de estilo de hapi][hapi-style-guide] para
javascript e incluye configuración de eslint para revisar eso. usa
`npm run lint` para revisar el código.

[docker]: https://www.docker.com/
[hapi-style-guide]: https://hapijs.com/styleguide
[account-settings]: https://www.twilio.com/console/account/settings
