import { logger } from "./app/logger.js";
import { web } from "./app/web.js";

const port = 3000;
web.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});

