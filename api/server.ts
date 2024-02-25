import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';

// Crea una instancia del servidor Express
const app = express();

// Define una interfaz para los datos enviados en la solicitud
interface EmailData {
  email: string;
  subject: string;
  message: string;
}

// Define una interfaz para la solicitud de formulario de contacto extendiendo la interfaz Request de Express
interface ContactFormRequest extends Request {
  body: EmailData;
}

// Define una interfaz para la respuesta de la API
interface ApiResponse {
  success: boolean;
  message?: string;
}

// Configura una ruta de API para enviar correos electrónicos
app.post('/api/send-email', async (req: ContactFormRequest, res: Response<ApiResponse>) => {
  const { email, subject, message } = req.body;

  // Validación de datos
  if (!email || !subject || !message) {
    return res.status(400).json({ success: false, message: 'Todos los campos son obligatorios' });
  }

  // Configuración del transporte de correo electrónico (usando Gmail en este ejemplo)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'tu_correo@gmail.com', // Coloca tu correo electrónico
      pass: 'tu_contraseña', // Coloca tu contraseña
    },
  });

  try {
    // Envía el correo electrónico utilizando Nodemailer
    await transporter.sendMail({
      from: 'tu_correo@gmail.com',
      to: email,
      subject: subject,
      text: message,
    });

    // Envía una respuesta de éxito al cliente
    res.status(200).json({ success: true, message: 'Correo electrónico enviado correctamente' });
  } catch (error) {
    console.error('Error al enviar el correo electrónico:', error);
    // Envía una respuesta de error al cliente
    res.status(500).json({ success: false, message: 'Error al enviar el correo electrónico' });
  }
});

// Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Ruta no encontrada' });
});

// Manejo de errores globales
app.use((err: any, req: Request, res: Response, next: any) => {
  console.error('Error no manejado:', err);
  res.status(500).json({ success: false, message: 'Error interno del servidor' });
});

// Inicia el servidor en el puerto 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});
