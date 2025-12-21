    async function getRandomQuote() {
      try {
        const response = await fetch('line.txt');
        const text = await response.text();
        const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
        const randomLine = lines[Math.floor(Math.random() * lines.length)];
        document.getElementById('quote-box').textContent = randomLine;
      } catch (err) {
        document.getElementById('quote-box').textContent = 'Error loading dialouges.';
      }
    }
