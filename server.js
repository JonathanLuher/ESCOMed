const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000; // Puedes cambiar el puerto si lo necesitas

// Middleware
app.use(cors()); // Permite solicitudes desde el frontend
app.use(bodyParser.json()); // Para leer JSON en las peticiones

// Simulamos la "base de datos" con tu JSON
const users = [
    { id: 1, nombre: "Juan Pérez" },
    { id: 0, nombre: "Juan Pérez" },
    { id: 4, nombre: "Juan Lopez" },
    { id: 5, nombre: "Juan González" }
];

// Ruta para validar el login
app.post('/login', (req, res) => {
    const { nombre, id } = req.body;

    // Buscar el usuario en la "base de datos"
    const user = users.find(user => user.nombre === nombre && user.id === id);

    if (user) {
        return res.json({ status: "success", message: "Login exitoso", user });
    } else {
        return res.status(401).json({ status: "error", message: "Credenciales incorrectas" });
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
