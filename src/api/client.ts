import ky from "ky";

// export const apiClient = (token?: string) => {
//   const config: Options = {
//     prefixUrl: (process.env.REACT_APP_API_URI as unknown) as string,
//   };
//   return ky.create(config);
// };

export const apiClient = ky.create({
  prefixUrl: (process.env.REACT_APP_API_URI as unknown) as string,
  headers: {
    Authorization: "Bearer valid$admin-123456789",
  },
});
