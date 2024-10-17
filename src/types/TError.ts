export type TError = {
  data?: {
    success: boolean;
    message: string;
    stack?: string;
    errorMessage: {
      path: string;
      message: string;
    }[];
  };
  status: number;
};

export type TResponse = {
  error?: TError;
  data?: {
    success: boolean;
    message: string;
    statusCode: number;
  };
};
