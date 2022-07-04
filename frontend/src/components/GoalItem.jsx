function GoalItem({ goal }) {
  return (
    <div>
      <div className="goal">
        <div>
          {new Date(goal.createdAt).toLocaleString('en-US')}
        </div>
        <h2>{goal.text}</h2>
      </div>
    </div>
  )
}

export default GoalItem
