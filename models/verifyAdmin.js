// middleware/verifyAdmin.js
module.exports = function (req, res, next) {
  // Assume req.user is populated by auth middleware (e.g., JWT verification)
  if (!req.user) {
    return res.status(401).json({ message: 'Not authenticated' });
  }
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied: Admins only' });
  }
  next();
};
