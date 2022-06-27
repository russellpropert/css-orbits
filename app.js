import express from 'express';

const app = express();
const dir = process.cwd();

const port = 3000;
const options = {
  dotfiles: "ignore",
  redirect: false
}

app.use('/', express.static(dir, options));

app.get('/', (req, res) => {
  res.sendFile(`${dir}/orbits.html`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
