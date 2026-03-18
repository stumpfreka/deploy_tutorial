export function logger(req, res, next) {
  const time = new Date().toISOString();
  console.log(`[${time}] ${req.method} ${req.path}`);
  next();
}

export function requireApiKey(req, res, next) {
  const apiKey = req.header("x-api-key");
  if (!apiKey) {
    return res.status(401).json({ message: "Missing x-api-key" });
  }
  console.log(apiKey);

  next();
}

export function attachUser(req, res, next) {
  const name = req.header("x-user");
  req.user = name ? { name } : null;
  next();
}

export function requireLogin(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ message: "Not logged in" });
  }
  next();
}
