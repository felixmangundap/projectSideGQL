function newProjectSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.project({ mutation_in: ['CREATED'] }).node()
}

const newProject = {
  subscribe: newProjectSubscribe,
  resolve: payload => {
    return payload
  },
}

function newVoteSubscribe(parent, args, context, info) {
  return context.prisma.$subscribe.vote({ mutation_in: ['CREATED'] }).node()
}

const newVote = {
  subscribe: newVoteSubscribe,
  resolve: payload => {
    return payload
  },
}

module.exports = {
  newProject,
  newVote,
}