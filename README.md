# 🛠 Dummy API Service

Este proyecto es una API construida con **NestJS** que utiliza **Redis**, **MongoDB** y **BullMQ** para la gestión de colas.

---

## 🚀 Configuración del Entorno

1. **Clonar el proyecto**:

```bash
git clone <url-del-repo>
cd dummy-api-service
```

2. **Configurar variables de entorno**:

```bash
cp .env.template .env
```

- Para las pruebas, se usa el archivo `.env.test`.

3. **Instalar dependencias**:

```bash
npm install
```

---

## 🐳 Levantar la aplicación y dependencias

Este proyecto utiliza **Docker Compose** para levantar servicios como **MongoDB** y **Redis**.

```bash
docker compose up -d
```

Esto iniciará los contenedores necesarios en segundo plano.

---

## 💪 Ejecutar Pruebas

Este proyecto utiliza **Jest** como framework de testing.

Para correr los tests:

```bash
npm run test
```

> Asegúrate de que el archivo `.env.test` esté configurado correctamente antes de ejecutar las pruebas.

---

## 📄 Documentación Swagger

Una vez que la aplicación esté corriendo, puedes acceder a la documentación Swagger en:

```
http://localhost:3000
```

---

## 📊 Acceder al Dashboard de Bull-Board

Para visualizar y administrar las colas de **BullMQ**, accede al dashboard de **@bull-board/nestjs** en:

```
http://localhost:3000/queues
```

---

## 📦 Scripts  Scripts \u00dátiles

| Comando                | Descripción                                 |
| ---------------------- | ------------------------------------------- |
| `npm run start:dev`     | Levantar la aplicación en modo desarrollo   |
| `npm run test`          | Ejecutar las pruebas                       |
| `docker compose up -d`  | Levantar MongoDB y Redis usando Docker      |

---

## ⚙️ Requisitos Previos

- Node.js >= 22x
- Docker y Docker Compose instalados
- npm instalado

---

## 👨‍💼 Autor

Proyecto desarrollado por **Alejandro*.

