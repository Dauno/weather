# Weather - Backend


En el directorio del proyecto, ejecutar:
#### `npm install`
#### `npm run start`

## Configuración
Las siguientes configuraciones deben agregarse como variables de entorno

* `PORT`: Puerto donde corre la API.
* `REDIS_URL`: String de conexión redis.
* `API_BASEURL`: Base URL de Dark Sky API.
* `API_SECRET`: Secret key de Dark Sky API.
* `INTERVAL`: Milisegundos entre solicitudes a Dark Sky API.


Use [dotenv](https://github.com/motdotla/dotenv) junto con un archivo `.env` para configurar el entorno.
