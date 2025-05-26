const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Serve the frontend
app.use(express.static(__dirname));

// Handle form submissions
app.post('/subscribe', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    // Save to a text file (or database)
    const entry = `${name}, ${email}\n`;
    fs.appendFile('subscribers.txt', entry, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error saving contact' });
        }
        res.json({ message: 'Subscribed successfully!' });
    });
});


// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
