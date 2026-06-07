import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const productsApi = createApi({
  reducerPath: 'productsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com',
  }),

  endpoints: (builder) => ({

    getProducts: builder.query({
      query: () => '/products',
    }),

    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

  }),
})

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
} = productsApi



// Yeh kya likha? Samjho line by line:
// createApi → RTK Query ko batao — ek naya API waiter banao
// reducerPath → Store mein is API ka naam kya hoga
// baseUrl → Har request is address pe jayegi
// endpoints → Do kaam kar sakta hai yeh waiter:
// getProducts    → sab products lao (/products)
// getProductById → ek product lao (/products/5)



// useGetProductsQuery → 
// Yeh hook hai — Component mein yeh likhoge to data aa jayega automatically