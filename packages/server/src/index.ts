import express from 'express';
import cors from 'cors';
require('dotenv').config();

const {
    PORT
} = process.env;


const app = express();
app.use(cors(
    {
        origin: 'http://localhost:3000'
    }
));

const port = PORT || 3000;

app.get("/api/v1/status", async (req: express.Request, res: express.Response) => {
    const { serverId } = req.query as { serverId: string };
    if(!serverId) return res.status(400).send("missing data");
    res.json({
        id: serverId,
        load: Math.floor(Math.random() * 100)
    });
});

app.listen(port, () => {
    console.log(`[server]: server listening on port ${port}`)
})