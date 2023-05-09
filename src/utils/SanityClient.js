import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: '45xkyycl',
    dataset: 'production',
    token: 'sk8k7zV2xoaK4FO8Zo5RL6YkiV4tXTw6TRK94rXMBM9Ymx7JFV4AFrxr9eOrUdYqYNiYcAEyXxM8HcoG4mZnU8RpcWAzLeWGVVn7nAZbhffcygDaSinddllm890WzUcD5k9yiaiHcNmsc9N7G4eiIK0XTFCBNdusTiPT6OEP5twFw6Yu4AHH',
    useCdn: true, // set to `true` to fetch from edge cache
    apiVersion: "2023-05-09", // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  })



