export const notFound = (req, res) => {
  res.status(404).json({ message: "Route not found" });
};

export const errorHandler = (err, req, res, next) => {
  console.error(`[Error] ${err.message}`);

  if (err.name === "CastError" && err.kind === "ObjectId") {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  if (err.code === 11000) {
    const field = Object.keys(err.keyValue || {})[0];
    return res.status(409).json({
      message: `The ${field} is already in use`,
      field,
    });
  }

  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    return res
      .status(400)
      .json({ message: "Validation failed", errors: messages });
  }

  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    message: err.message || "Internal server error",
  });
};
