// @desc Get Goals
// @route GET /api/goals
// @access Private
const getGoals = (req, res) => {
  res.status(200).json({ message: 'Get goals functional' })
}

// @desc set Goals
// @route POST /api/goals
// @access Private
const setGoal = (req, res) => {
  res.status(200).json({ message: 'Set goal functional as well!' })
}

// @desc Update Goal
// @route PUT /api/goals/:id
// @access Private
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id} is a-go` })
}

// @desc Delete Goal
// @route DELETE /api/goals/:id
// @access Private
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id} gucci gang.` })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}