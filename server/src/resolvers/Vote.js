function project(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).project()
}

function user(parent, args, context) {
  return context.prisma.vote({ id: parent.id }).user()
}

module.exports = {
  project,
  user,
}