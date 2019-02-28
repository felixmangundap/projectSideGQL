const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function userSignup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({ ...args, password })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}

async function userLogin(parent, args, context, info) {
  const user = await context.prisma.user({ email: args.email })
  if (!user) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET, { expiresIn: '1d' })

  return {
    token,
    user,
  }
}

async function userUpdate(parent, args, context, info) {
  const userId = getUserId(context)

  return context.prisma.updateUser({
    where: {
      id: userId,
    },
    data: {
      email: args.email,
      name: args.name,
    }
  })
}

async function userUpdatePassword(parent, args, context, info) {
  const userId = getUserId(context)
  const user = await context.prisma.user({ id: userId })

  const valid = await bcrypt.compare(args.oldPassword, user.password)
  if (!valid) {
    throw new Error('Invalid old password')
  }

  const password = await bcrypt.hash(args.newPassword, 10)

  return context.prisma.updateUser({
    where: {
      id: userId,
    },
    data: {
      password,
    }
  })
}

function projectCreate(parent, args, context, info) {
  const userId = getUserId(context)
  return context.prisma.createProject({
    info: { create: args.info },
    urls: { create: args.urls },
    creator: { connect: { id: userId } },
  })
}

async function projectDelete(parent, args, context, info) {
  const userId = getUserId(context)

  const projectOwned = await context.prisma.$exists.project({
    id: args.id,
    creator: { id: userId },
  })

  if (!projectOwned) {
    throw new Error(`Not authorized to delete project`)
  }

  return context.prisma.deleteProject({
    id: args.id,
  })
}

async function projectUpdate(parent, args, context, info) {
  const userId = getUserId(context)

  const projectOwned = await context.prisma.$exists.project({
    id: args.id,
    creator: { id: userId },
  })

  if (!projectOwned) {
    throw new Error(`Not authorized to update project`)
  }

  return context.prisma.updateProject({
    where: {
      id: args.id,
    },
    data: {
      info: { update: args.info },
      urls: { update: args.urls },
    }
  })
}

async function vote(parent, args, context, info) {
  const userId = getUserId(context)

  const projectExists = await context.prisma.$exists.vote({
    user: { id: userId },
    project: { id: args.projectId },
  })
  if (projectExists) {
    throw new Error(`Already voted for link: ${args.projectId}`)
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    project: { connect: { id: args.projectId } },
  })
}

module.exports = {
  projectCreate,
  projectDelete,
  projectUpdate,
  userLogin,
  userSignup,
  userUpdate,
  userUpdatePassword,
  vote,
}