const DEFAULT_MODEL_SIZE = 299;

export const model = {
  size: Number(process.env.MODEL_SIZE) || DEFAULT_MODEL_SIZE,
};
