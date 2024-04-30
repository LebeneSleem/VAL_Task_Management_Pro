// Middleware function to verify JWT token
const verifyToken = (req, res, next) => {
  // Get token from request headers
  const token = req.headers.authorization;

  // Check if token is provided
  if (!token) {
    return res.status(401).json({ success: false, message: 'Unauthorized: No token provided.' });
  }

  try {
    // Verify token and decode payload
    const decoded = jwt.verify(token, 'your_secret_key');
    
    // Attach decoded payload to request object
    req.user = decoded;

    // Continue to the next middleware
    next();
  } catch (error) {
    // Token verification failed
    return res.status(401).json({ success: false, message: 'Unauthorized: Invalid token.' });
});
