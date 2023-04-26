## **Events**

Es una Aplicacion que le permite al usuario:

- _Navegar en una lista de eventos/festivales._
- _Ver informacion en detalle de cada evento/festival._
- _Registrarse_
- _Iniciar Sesión_
- _Si esta logueado podra acceder a otras funcionalidades._

### Estructura de datos API Mockapi:

```ts
events {
  id: number
  title: string
  location: string
  date: string
  hour: string
  locationCoordinates: object
  description: string
  images: array
  url: string
}
```

```ts
User {
  id: number
  date: date
  username: faker.js
  avatar: faker.js
  password: string
  about: string
  interests: string
  location: string
  confirmPassword: string
}
```

## **Api Endpoint**

### Event Endpoint

> https://643d8393f0ec48ce905e3f71.mockapi.io/api/v1/events

### Users Endpoint

> https://643d8393f0ec48ce905e3f71.mockapi.io/api/v1/users

## Usuarios registrados

```ts
Usuario1: jose;
Contraseña: 1234;

Usuario2: jorge;
Contraseña: jorge;

Usuario3: carlos;
Contraseña: carlos;
```
