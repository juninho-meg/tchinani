const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route ta Test
app.get('/', (req, res) => {
    sendResponse = { status: "Server Tchinani Store khaddam mlih 🚀" };
    res.json(sendResponse);
});

// Route ta Qobool Les Commandes (POST)
app.api = app.post('/api/orders', async (req, res) => {
    try {
        const orderData = req.body;

        console.log("📦 Nouvelle Commande reçue:", orderData);

        // Hna tqder t-zid code ta Database (MongoDB / PostgreSQL) 
        // Wela t-sifet la commande l Telegram Bot ta3ek bach t-3ardhha f télé
        
        // Response lel Frontend
        res.status(201).json({ 
            success: true, 
            message: "Commande enregistrée avec succès !",
            orderId: "TCH-" + Math.floor(100000 + Math.random() * 900000)
        });

    } catch (error) {
        console.error("Erreur:", error);
        res.status(500).json({ success: false, message: "Erreur serveur interne." });
    }
});

app.listen(PORT, () => {
    console.log(`Server en cours d'exécution sur le port ${PORT}`);
});