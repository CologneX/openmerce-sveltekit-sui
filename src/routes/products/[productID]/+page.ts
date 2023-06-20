import type {PageLoad} from './$types';

export const load = (async ({params, fetch}) => {
    return {
        productID: params.productID,
    }
}) satisfies PageLoad;