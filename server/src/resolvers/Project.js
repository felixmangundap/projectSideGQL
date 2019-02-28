function creator(parent, args, context) {
  return context.prisma.project({ id: parent.id }).creator()
}

function info(parent, args, context) {
  return context.prisma.project({ id: parent.id }).info()
}

function urls(parent, args, context) {
  return context.prisma.project({ id: parent.id }).urls()
}

function votes(parent, args, context) {
  return context.prisma.project({ id: parent.id }).votes()
}

module.exports = {
  info,
  urls,
  creator,
  votes,
}