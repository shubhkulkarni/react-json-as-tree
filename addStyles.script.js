const fs = require('fs');
const path = require('path');

const files = ['index.es.js', 'index.umd.js'];
const oldText = 'node_modules/react-json-as-tree/dist/style.css';
const newText = './style.css';

files.forEach(file => {
    const filePath = path.join(__dirname, file);

    // Check if the file exists
    if (fs.existsSync(filePath)) {
        // Read the file
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${file}:`, err);
                return;
            }

            // Replace the text
            const result = data.replaceAll(oldText, newText);

            // Write the file back
            fs.writeFile(filePath, result, 'utf8', (err) => {
                if (err) {
                    console.error(`Error writing to file ${file}:`, err);
                } else {
                    console.log(`Successfully updated ${file}`);
                }
            });
        });
    } else {
        console.error(`File not found: ${file}`);
    }
});
