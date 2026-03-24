import express from 'express';
import cors from 'cors';

const app = express();

// Opciones de CORS para permitir solicitudes desde el frontend Vite
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

// Endpoint: Obtener el horario actual
app.get('/api/ControlAsistencia/horario-actual', (req, res) => {
  // Retorna datos de ejemplo simulando una base de datos
  res.json({
    idHorario: 1234,
    aulaNombre: 'A-101',
    materia: 'Arquitectura de Software',
    docenteNombre: 'Ing. Roberto Mamani',
    horaInicio: '08:00',
    horaFin: '09:30'
  });
});

// Endpoint: Registrar asistencia
app.post('/api/ControlAsistencia/registrar-asistencia', (req, res) => {
  const { idHorario, estado, observaciones } = req.body;
  
  if (!idHorario || !estado) {
    return res.status(400).json({ mensaje: 'Datos incompletos.' });
  }

  // Lógica de base de datos iría aquí...
  console.log(`[API] Asistencia registrada para Horario ${idHorario}: ${estado} - Obs: ${observaciones}`);

  res.json({
    mensaje: `Asistencia del docente registrada correctamente como '${estado}'.`
  });
});

// Endpoint: Obtener historial
app.get('/api/ControlAsistencia/asistencias/:idHorario', (req, res) => {
  res.json([
    { 
      id: 1, 
      idHorario: req.params.idHorario, 
      estado: 'Presente', 
      observacion: 'Llegó a tiempo', 
      fecha: new Date().toISOString() 
    }
  ]);
});

// Iniciar servidor
const PORT = 7158;
app.listen(PORT, () => {
  console.log(`Backend API de Control Docente ejecutándose en: http://localhost:${PORT}`);
});
