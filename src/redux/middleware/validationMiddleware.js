export const validationMiddleware = () => (next) => (action) => {
  console.group('[validationMiddleware]');
  if (action.type !== 'BLOCKED_ACTION') {
    next(action);
  } else {
    console.error('invalid action type provided');
  }
  console.groupEnd();
};

export default validationMiddleware;
