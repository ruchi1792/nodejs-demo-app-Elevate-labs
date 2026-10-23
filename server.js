const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Node.js Demo App is running!',
    status: 'success',
    project: 'CI/CD Pipeline using GitHub Actions and Docker'
  });
});

app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy'
  });
});

if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
