// Express route for user login
app.post('/api/login', async (req, res) => {
  try {
    // Collect user credentials from request body
    const { email, password } = req.body;

    // Validate input data
    if (!email || !password) {
      return res.status(400).json({ success: false, message: 'Email and password are required.' });
    }

    // Retrieve user from the database by email
    const user = await User.findOne({ email });

    // If user not found, return error
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    // Check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If password is incorrect, return error
    if (!isPasswordValid) {
      return res.status(401).json({ success: false, message: 'Invalid email or password.' });
    }

    // If credentials are valid, generate a JWT token
    const token = jwt.sign({ userId: user.id, email: user.email }, 'your_secret_key', { expiresIn: '1h' });

    // Return success response with token
    res.status(200).json({
      success: true,
      message: 'Login successful.',
      token: token,
    });
  } catch (error) {
    // Handle errors
    console.error('Login failed:', error);
    res.status(500).json({
      success: false,
      message: 'Login failed. Please try again later.',
    });
  }
});
