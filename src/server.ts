import { app } from "./app";

app.listen(process.env.PORT || 3333, () => console.log('Server started at port 3333'));