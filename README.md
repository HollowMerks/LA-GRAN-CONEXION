# Control Docente - Frontend Web

Sistema de Control Docente y Registro de Asistencias construido con Vue.js y Vite.

## Arquitectura Actual

- **Frontend**: SPA elaborada con Vue.
- **Backend Local (API)**: Se ha integrado un backend local en Node.js (Express) en el archivo `api.js` que se encarga de servir los datos de prueba y procesar el registro de las asistencias, simulando el comportamiento esperado originalmente en `localhost:7158`.

## Scripts de Ejecución

Para correr el proyecto localmente y tener el flujo completo funcionando, es necesario levantar tanto la API como el frontend.

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Levantar la API Backend (Puerto 7158):**
   Abre una terminal y ejecuta:
   ```bash
   npm run dev:api
   ```

3. **Levantar el Frontend (Vite):**
   Abre otra terminal y ejecuta:
   ```bash
   npm run dev
   ```

Con ambos servidores corriendo, la aplicación podrá consumir exitosamente los horarios de los docentes y registrar su asistencia.
