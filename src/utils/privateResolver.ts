const privateResolver = (fn) => async (parent, args, context, info) => {
  if (!context.req.user) {
    throw new Error('Authentication Error');
  }
  const resolved = await fn(parent, args, context, info);
  return resolved;
};

export default privateResolver;
