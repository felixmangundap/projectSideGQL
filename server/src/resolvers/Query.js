const { getUserId } = require('../utils')

async function feed(parent, args, context) {
  const where = args.filter
    ? {
        AND: [
          {
            OR: [
              { info: { title_contains: args.filter } },
              { info: { description_contains: args.filter } },
              { info: { oneLiner_contains: args.filter } },
              { url_contains: args.filter },
            ]
          },
          { info: { private: false } },
        ]
      }
    : {
      info: { private: false }
    }

  const projects = await context.prisma.projects({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .projectsConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    projects,
    count,
  }
}

async function project(parent, args, context) {
  const userId = getUserId(context)

  const projectOwned = await context.prisma.$exists.project({
    AND: [
      { id: args.id },
      { OR: [
          {creator: { id: userId } },
          {info: {private: false } },
        ]
      },
    ]
  })
  
  if (!projectOwned) {
    throw new Error(`Not authorized to view project`)
  }
  
  const project = await context.prisma.project({
    id: args.id,
  })

  return project;
}

async function projects(parent, args, context) {
  const projects = await context.prisma.user({
    id: args.userId,
  }).projects({
    where: {
      info: { private: false },
    }
  })

  return projects;
}

async function user(parent, args, context) {
  const user = await context.prisma.user({
    id: args.id,
  })

  return user;
}

module.exports = {
  feed,
  project,
  projects,
  user,
}