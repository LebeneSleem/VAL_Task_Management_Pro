// Express route for user registration
app.post('/api/register', async (req, res) => {
  try {
    // Collect user data from request body
    const { username, email, password } = req.body;

    // Validate input data (e.g., check for uniqueness, format)
    // Perform password strength validation

    // Hash the password securely
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store user data in the database
    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    // Return success response
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (error) {
    // Handle errors
    console.error('Registration failed:', error);
    res.status(500).json({
      success: false,
      message: 'Registration failed. Please try again later.',
    });
  }
});
