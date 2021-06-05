export const validationMiddleware = () => (next) => (action) => {
  if (action.type !== 'BLOCKED_ACTION') {
    next(action);
  } else {
    console.error('invalid action type provided');
  }
};

export default validationMiddleware;
