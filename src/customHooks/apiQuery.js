import { useQuery, useMutation } from '@tanstack/react-query'

const baseUrl = "https://dummyjson.com/users";
export const useGetUsersQuery = (page, pageSize, sortBy, order) => {
  return useQuery({
    queryKey: ['users', page, pageSize, sortBy, order],
    queryFn: async () => {
      const skip = page * pageSize;
      const response = await fetch(`${baseUrl}?limit=${pageSize}&skip=${skip}&sortBy=${sortBy}&order=${order}`);
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      return response.json();
    },
    retry: 1,
    staleTime: 1000 * 60 * 5, // 5 minutes
  })
}

export const useAddUserQuery = () => {
  return useMutation({
    mutationFn: async(formData) => {
      const response = await fetch(`${baseUrl}/add`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      return data;
    }
  })
}