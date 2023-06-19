import type {PageLoad} from './$types';

export const load = (async ({params, fetch}) => {
    const response = await fetch ('/api/v1/product', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })

    return {
        productID: params.productID,
    }
}) satisfies PageLoad;