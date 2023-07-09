const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");
const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

app.post("/authentication", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { "private-key": "b1f1d76d-d135-4324-8441-d9e1b382e3fc" } }
    );
    // console.log(r.data);

    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }

  //   return res.json({ username: username, secret: "pass..." });
});

app.listen(3001);
