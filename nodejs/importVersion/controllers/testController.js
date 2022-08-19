const testController = async (req, res) => {
  try {
    res.status(200).json({ text: 'test' })
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

export { testController }
